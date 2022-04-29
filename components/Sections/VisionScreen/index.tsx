import React from "react";
import Image from "next/image";
import { BrandList } from "../../../components/Lists";
import { partners } from "../../../data/partners.js";
import styles from "./VisionScreen.module.css";

function index() {
  return (
    <div className={styles["container"]}>
      <BrandList title="Partners" data={partners} />
      <BrandList title="Blockchains" data={partners} />
    </div>
  );
}

export default index;
