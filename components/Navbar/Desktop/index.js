import React from "react";
import Image from "next/image";
import { ButtonRounded } from "../../Buttons";
import { OptionsMenu } from "../content";
import ownStyles from "./Desktop.module.css";
import Link from "next/link";
export default function mobile({ style, logo, width }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={style["nav-container"]}>
      <div style={{ width: 200, cursor: "pointer" }}>
        <Link href={"/"} replace>
          <Image
            src={logo}
            alt="Logo"
            layout="responsive"
            width={958}
            height={86}
          />
        </Link>
      </div>

      <div className={ownStyles["nav-links-container"]}>
        {OptionsMenu.map(({ label, to }, index) =>
          index == 0 ? (
            <Link href={"/"}>
              <span
                onClick={() => scrollToTop()}
                className={ownStyles["nav-link"]}
              >
                {label}
              </span>
            </Link>
          ) : (
            <Link href={to}>
              <span className={ownStyles["nav-link"]}>{label}</span>
            </Link>
          )
        )}
        <ButtonRounded text={"Subscribe"} />
      </div>
    </div>
  );
}
