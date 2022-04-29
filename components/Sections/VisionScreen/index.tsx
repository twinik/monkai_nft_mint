import React from "react";
import Image from "next/image";
import { BrandList } from "../../../components/Lists";
import { data } from "../../../data/partners.js";
import styles from "./VisionScreen.module.css";

function index() {
  return (
    <div className={styles["container"]}>
      <BrandList title="Partners" data={data} />
      <BrandList title="Blockchains" data={data} />
    </div>
  );
}

export default index;
