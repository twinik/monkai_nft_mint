import React from "react";
import Image from "next/image";
import styles from "./BrandList.module.css";

function index({ title, data }) {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <div className={styles["list"]}>
        {data.map((item, index) => (
          <a href={item.link} target="_blank">
            <Image
              src={item.src}
              alt={item.name}
              key={index}
              width={50}
              height={50}
              layout="responsive"
              className={styles["image"]}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default index;
