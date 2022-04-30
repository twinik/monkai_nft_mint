import React from "react";
import Image from "next/image";
import { BrandList } from "../../../components/Lists";
import { partners } from "../../../data/partners.js";
import { blockchains } from "../../../data/blockchains.js";
import styles from "./VisionScreen.module.css";

function index() {
  return (
    <div className={styles["container"]}>
      <BrandList title="Partners" data={partners} />
      <BrandList title="Blockchains" data={blockchains} />
    </div>
  );
}

export default index;
