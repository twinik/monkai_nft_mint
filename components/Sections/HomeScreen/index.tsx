import React from "react";
import Image from "next/image";
import styles from "./HomeScreen.module.css";

import homescreen from "../../../public/images/home.jpg";

function index() {
  return (
    <div className={styles["container"]}>
      <div className={styles["gradient"]}></div>
      {/* <Image
        src={homescreen}
        className={styles["image"]}
        layout="responsive"
        height={840}
        width={1903}
      /> */}
    </div>
  );
}

export default index;
