import React from "react";
import Image from "next/image";
import styles from "./VisionScreen.module.css";

import pizza from "../../../public/images/pizza.jpg";

function index() {
  return (
    <div className={styles["container"]}>
      <div className={styles["left-content"]}>
        <div className={styles["content"]}>
          <p className={`${styles["vision"]} ${styles["content-part"]}`}>
            VISION
          </p>
          <div className={`${styles["title-box"]} ${styles["content-part"]}`}>
            <p className={styles["title"]}>
              We’re Changing the Way the World Thinks About Food
            </p>
          </div>
          <p className={`${styles["text"]} ${styles["content-part"]}`}>
            Typically you have to pay every time you want to get food, but we
            believe that with the help of web 3 we're able to make an NFT that
            grants the holder a endless supply of pizza
          </p>
        </div>
      </div>
      <div className={styles["right-content"]}>
        <div className={styles["img-container"]}>
          <img
            src={"/images/pizza.jpg"}
            alt="pizza"
            className={styles["img"]}
          />
        </div>
      </div>
    </div>
  );
}

export default index;
