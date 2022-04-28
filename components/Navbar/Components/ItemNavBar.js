import Link from "next/link";
import React from "react";

export default function ItemNavBar({
  text,
  style,
  childStyle,
  to,
  setOpen,
  index,
}) {
  return (
    <div
      style={{
        borderBottom: "thin solid rgba(255, 255, 255, 0.151)",
        ...style,
      }}
    >
      <Link href={index !== 0 ? to : ""} replace>
        <h4
          onClick={() => {
            setOpen(false);
            if (index == 0) {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
          style={{
            margin: 0,
            padding: ".5rem 0",
            fontSize: ".9em",
            fontWeight: "300",
            color: "rgba(255, 255, 255, 0.9)",
            ...childStyle,
          }}
        >
          {text}
        </h4>
      </Link>
    </div>
  );
}
