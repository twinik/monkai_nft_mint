import { useRouter } from "next/dist/client/router";
import React from "react";
import Link from "next/link";

// Models
import { NavigationLinks } from "../../models/navigation";

export const NavLinkMobile: React.FC<NavigationLinks> = ({ title, path }) => {
  return (
    <Link href={path}>
      <div className="c-nav-item-mobile cursor-pointer">
        <div className="c-nav-q-mobile cursor-pointer">
          <div className="c-nav-q-text-mobile">
            <div className="nav-q-text-mobile ">{title}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
