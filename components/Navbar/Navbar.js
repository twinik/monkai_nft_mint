import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import logo from "../../public/images/logo.png";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useWindowSize } from "../../hooks/useWindowDimensions.js";

export default function Navbar() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [width2, setWidth2] = useState("");
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  const { width, height } = useWindowSize();

  useEffect(() => {
    setWidth2(window.innerWidth);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={
        clientWindowHeight <= 0
          ? style["nav-containerWrap"]
          : `${style["nav-containerWrap"]} ${style["active"]}`
      }
    >
      {!width ? (
        " "
      ) : width > 1000 ? (
        <Desktop style={style} logo={logo} width={clientWindowHeight} />
      ) : (
        <Mobile style={style} logo={logo} width={clientWindowHeight} />
      )}
    </div>
  );
}
