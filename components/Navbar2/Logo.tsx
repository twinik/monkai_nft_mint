import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/monkai-logo.png";

export const Logo = () => {
  return (
    <Link href="/">
      <div
        className="custom-button primary secondary w-inline-block cursor-pointer"
        style={{ overflow: "visible" }}
      >
        <Image
          src={logo}
          height={40}
          width={120}
          className="custom-button-text-2"
        />
        {/*<div className="custom-button-text-2">MONKAI</div>*/}
        <div className="logo-second-rect"></div>
      </div>
    </Link>
  );
};
