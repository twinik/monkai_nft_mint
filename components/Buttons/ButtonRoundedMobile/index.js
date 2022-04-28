import React from "react";
import style from "./BtnRoundMobile.module.css";

export default function ButtonRoundedMobile({ text }) {
  return (
    <button
      className={style["button-rounded-mobile"]}
      onClick={() => alert("Subscribe")}
    >
      {text}
    </button>
  );
}
