import { useRouter } from "next/dist/client/router";
import React from "react";
import Link from "next/link";

// Models
import { NavigationLinks } from "../../models/navigation";

export const Navlink: React.FC<NavigationLinks> = ({ title, path }) => {
  return (
    <Link href={path}>
      <div className="c-nav-item cursor-pointer">
        <div className="c-nav-q cursor-pointer">
          <div className="c-nav-q-text">
            <div className="nav-q-text">{title}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
