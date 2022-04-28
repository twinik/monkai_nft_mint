import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ItemNavbarProduct.module.css";
import Link from "next/link";
export default function ItemNavbarProduct({
  title,
  style,
  link,
  setOpen = () => {},
}) {
  return (
    <Link href={link || ""} replace>
      <div
        className={styles["ItemNavbarProduct-container"]}
        style={style ? style : {}}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles["ItemNavbarProduct-content"]}>
          <h4 className={styles["ItemNavbarProduct-title"]}>{title}</h4>
          <p className={styles["ItemNavbarProduct-description"]}></p>
        </div>
      </div>
    </Link>
  );
}
