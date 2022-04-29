import React from "react";
import Image from "next/image";
import styles from "./BrandList.module.css";

function index({ title, src, alt, data }) {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <div className={styles["list"]}>
        {data.map((item, index) => (
          <Image
            src={item}
            alt={alt}
            key={index}
            width={100}
            height={100}
            layout="responsive"
          />
        ))}
      </div>
    </div>
  );
}

export default index;
