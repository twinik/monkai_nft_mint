import React, { useEffect } from "react";
import { AppProps } from "next/app";

import Navbar from "../components/Navbar/Navbar";

import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { useCookies, withCookies } from "react-cookie";

import "../styles/global.css";

const getLibrary = (provider: any) =>
  new ethers.providers.Web3Provider(provider);

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [cookie, setCookie] = useCookies(["ref"]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (!urlParams.has("ref")) return;

    const cookieRef = urlParams.get("ref");
    setCookie("ref", cookieRef, { path: "/", maxAge: 60 * 60 * 24 * 30 });
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Navbar />
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
// @ts-ignore
export default withCookies(MyApp);
