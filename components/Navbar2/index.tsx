import React, { useState } from "react";
import { Logo } from "./Logo";
import { Navlink } from "./Navlink";
import { NavLinkMobile } from "./NavlinkMobile";

interface NavigationLinks {
  path: string;
  name: string;
  title: string;
}

const navLinks: NavigationLinks[] = [
  {
    name: "about",
    path: "/about",
    title: "ABOUT THE TEAM",
  },
  {
    name: "staking",
    path: "/staking",
    title: "STAKING",
  },
  {
    name: "manga",
    path: "/manga",
    title: "MANGA",
  },
  {
    name: "gallery",
    path: "/gallery",
    title: "GALLERY",
  },
  {
    name: "temple",
    path: "/temple",
    title: "THE TEMPLE",
  } /* 
  {
    name: "updates",
    path: "/updates",
    title: "UPDATES",
  },
  {
    name: "manifesto",
    path: "/manifesto",
    title: "MANIFESTO",
  },
  */,
  {
    name: "mint",
    path: "https://eth-sol-gamma.netlify.app/",
    title: "MINT",
  },
  /* {
    name: "mindmap",
    path: "/mindmap",
    title: "MINDMAP",
  },
  {
    name: "shop",
    path: "/shop",
    title: "SHOP",
  }, */
];
interface Props {
  navbar: boolean;
  setNavbar: any;
}

export const Navbar: React.FC<Props> = ({ navbar, setNavbar }) => {
  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <div>
      <div className="w-full top-0 lg:px-8 px-5 lg:pt-8 z-70  fixed top-0 lg:relative navbar back-col">
        <div className="flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0 border-bottom-red">
          <div className="flex-grow">
            <div className="flex" onClick={() => navbar && handleNavbar()}>
              <Logo />
            </div>
          </div>
          <div className="items-center  hidden lg:flex">
            <ul className="flex space-x-2">
              {navLinks.map((navLink) => (
                <li key={navLink.name}>
                  <Navlink {...navLink} />
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden flex" onClick={() => handleNavbar()}>
            <div className="hamburger-lines">
              <span className={`line line1 ${navbar && "checked"}`}></span>
              <span className={`line line2 ${navbar && "checked"}`}></span>
              <span className={`line line3 ${navbar && "checked"}`}></span>
            </div>
          </div>
          <div
            className={`hamburger-menu ${!navbar && "hidden"}`}
            onClick={() => handleNavbar()}
          >
            <ul
              className={`nav-mobile flex  absolute top-24 right-0 bottom-0 w-full z-50 flex flex-col ${
                navbar ? "from-left" : "left"
              }`}
            >
              {navLinks.map((navLink) => (
                <li key={navLink.name}>
                  <NavLinkMobile {...navLink} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
