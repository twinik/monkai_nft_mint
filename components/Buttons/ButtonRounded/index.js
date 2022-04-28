import React from "react";
import style from "./ButtonRounded.module.css";

export default function ButtonRounded({ text }) {
  return (
    <button
      className={style["button-rounded"]}
      onClick={() => alert("Subscribe")}
    >
      {text}
    </button>
  );
}
