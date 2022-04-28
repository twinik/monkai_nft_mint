import React, { useState, useEffect, useRef } from "react";

import minusIcon from "@iconify/icons-mdi/minus";
import plusIcon from "@iconify/icons-mdi/plus";
import { Icon } from "@iconify/react";
import Link from "next/link";

import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import Countdown from "react-countdown";
import { useCookies } from "react-cookie";
import contractAbi from "../../../utils/abi.json";
import Button from "./button";

// const injected = new InjectedConnector({ supportedChainIds: [1] });
// const contractAddress = "0xbfd2cfa581253ef250bfe328e9d1f2ee07bf5744";

const injected = new InjectedConnector({ supportedChainIds: [4] });
const contractAddress = "0x38609b4390c58889fdFD1EDF455DF300aEcB1A2f";

const maxSupply = 1500;
const maxPerTx = 20;

const unitPrice = 0.0777;

interface CAProps {
  decrement(): void;
  increment(): void;
  amount: number | string;
}

const ChangeAmount = ({ decrement, increment, amount }: CAProps) => {
  return (
    <span className="flex flex-row items-center">
      <button onClick={decrement} className="font-openSea">
        <Icon icon={minusIcon} height="24" />
      </button>
      <p className="text-xl">{amount}</p>
      <button onClick={increment} className="font-openSea">
        <Icon icon={plusIcon} height="24" />
      </button>
    </span>
  );
};

export const Buy = () => {
  // @ts-ignore
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  // @ts-ignore
  const [cookie, setCookie] = useCookies(["ref"]);

  const [isLoading, setIsLoading] = useState(true);
  const [isMinting, setIsMinting] = useState(false);

  const signer = useRef<any>(null);
  const contract = useRef<any>(null);

  const [totalSupply, setTotalSupply] = useState();

  const [saleStart, setSaleStart] = useState<any>(null);
  const saleStartTimeout = useRef<any>(null);
  const [saleIsActive, setSaleIsActive] = useState(false);

  const [count, setCount] = useState(1);
  const totalPrice = (unitPrice * count).toFixed(4);

  const [totalMintedByAddress, setTotalMintedByAddress] = useState<number>(0);
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const maxPerAccount = maxPerTx;

  const maxAllowed = Math.max(0, maxPerAccount - (totalMintedByAddress ?? 0));

  const isSoldOut = totalSupply === maxSupply;

  const getMintedByUser = async () => {
    const fromBlock = 14468568;
    let count = 0;

    const transferSingleEvents = await contract.current.queryFilter(
      "TransferSingle",
      fromBlock,
      "latest"
    );

    for (const event of transferSingleEvents) {
      if (event.args.operator.toLowerCase() === account?.toLowerCase()) count++;
    }

    const transferBatchEvents = await contract.current.queryFilter(
      "TransferBatch",
      fromBlock,
      "latest"
    );

    for (const event of transferBatchEvents) {
      if (event.args.operator.toLowerCase() === account?.toLowerCase())
        count += event.args.ids.length;
    }

    setTotalMintedByAddress(count);

    return count;
  };

  const fetchState = async () => {
    setIsLoading(true);

    setTotalSupply(await contract.current.totalSupply());

    setSaleStart((await contract.current.saleStart()) * 1000);

    await getMintedByUser();

    setIsLoading(false);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    if (count < maxAllowed) setCount(count + 1);
  };

  const handleConnectWallet = async () => {
    await activate(injected);
  };

  const handleMint = async () => {
    console.log("Mint");

    setIsMinting(true);

    try {
      const tx = await contract.current.mint(count, {
        value: ethers.utils.parseUnits(totalPrice.toString(), 18),
      });

      await tx.wait();

      toast.success("Minted successfully.");
    } catch (err: any) {
      console.error(err);
      console.log(err.code, err.message.substring(5));

      if (err.code && err.code === "INSUFFICIENT_FUNDS") {
        toast.error("Insufficient funds.");
      } else if (err.code && err.code === 4001) {
        toast.error("Transaction signature was denied.");
      } else {
        toast.error("Minting failed.");
      }
    }

    setIsMinting(false);
  };

  useEffect(() => {
    if (!saleStart) return;

    const now = Date.now();

    // Remove current timeout if there is any
    if (saleStartTimeout.current) clearTimeout(saleStartTimeout.current);

    // Set timeout for sale start
    saleStartTimeout.current = setTimeout(() => {
      setSaleIsActive(true);
    }, Math.max(saleStart - now, 0));
  }, [saleStart]);

  useEffect(() => {
    if (!account) return;

    signer.current = library.getSigner();
    contract.current = new ethers.Contract(
      contractAddress,
      // @ts-ignore
      contractAbi,
      signer.current
    );

    contract.current.on("TransferSingle", async () => {
      fetchState();
    });

    contract.current.on("TransferBatch", async () => {
      fetchState();
    });

    fetchState();

    // setIsWhitelisted(whitelist.includes(account.toLowerCase()));
    setIsWhitelisted(true);
  }, [account]);

  useEffect(() => {
    if (!maxAllowed) return;

    if (count > maxAllowed) {
      setCount(Math.max(maxAllowed, 1));
    }
  }, [maxAllowed]);

  return (
    <>
      <article
        className="flex flex-col pb-10 bg-white rounded-lg
        text-gray-800 font-openSea items-center"
        style={{ fontFamily: "Montserrat" }}
      >
        <section id="card-header" className="my-8 text-left mx-auto w-4/5">
          <h1 className="font-openSea text-gray-800 text-2xl">
            MINT YOUR METAPIZZA NFT
          </h1>
          <p>Total supply: TBD</p>
        </section>
        <section
          id="card-info"
          className="flex flex-row justify-around h-full w-4/5"
        >
          <span className="w-[43%]">
            <img
              className="rounded-lg"
              src={"/images/metapizzahero.gif"}
              alt="TuxMan"
              width={1200}
              height={1200}
            />
          </span>
          <span className="w-[40%] text-right my-3">
            <p>Price Per NFT</p>
            <h5 className="font-openSea text-gray-800">
              {unitPrice} ETH + gas
            </h5>
            <p className="">
              {saleIsActive ? "Sale is active" : "Live 05/07/2022"}
            </p>
          </span>
        </section>
        <section id="card-amount" className="flex flex-col w-4/5 my-4">
          <div className="bg-gray-300/95 flex flex-row justify-between px-6 rounded-lg items-center">
            <ChangeAmount
              amount={count}
              increment={handleIncrease}
              decrement={handleDecrease}
            />
            <p className="font-semibold">{maxAllowed} MAX</p>
          </div>
          <div className="flex flex-row w-full justify-between px-6 py-3">
            <p>Total</p>
            <h5 className="font-openSea text-dark-800">
              {totalPrice} ETH + gas
            </h5>
          </div>
        </section>
        <section id="card-buy" className="w-4/5">
          {isSoldOut && (
            <Link href="/" passHref>
              <p className="">
                <u>Buy now</u> on OpenSea, don&apos;t miss out!
              </p>
            </Link>
          )}

          {active ? (
            isLoading ? (
              <Button disabled>Loading...</Button>
            ) : saleIsActive ? (
              isSoldOut ? (
                <Button disabled>Sale Sold Out</Button>
              ) : isWhitelisted ? (
                <Button
                  onClick={handleMint}
                  disabled={isMinting || totalMintedByAddress >= maxPerTx}
                >
                  {isMinting
                    ? "Minting..."
                    : totalMintedByAddress >= maxPerTx
                    ? "Maximum limit reached"
                    : "Mint"}
                </Button>
              ) : (
                <Button disabled>Not Whitelisted</Button>
              )
            ) : (
              // @ts-ignore
              <Countdown
                date={saleStart}
                renderer={({ days, hours, minutes, seconds }) => (
                  <Button disabled>
                    {days.toString().padStart(2, "0")}:
                    {hours.toString().padStart(2, "0")}:
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")} time remaining
                  </Button>
                )}
              />
            )
          ) : (
            <Button onClick={handleConnectWallet}>Connect Wallet</Button>
          )}
        </section>
        <Toaster />
      </article>
    </>
  );
};
