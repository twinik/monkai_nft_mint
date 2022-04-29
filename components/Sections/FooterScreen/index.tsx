import React from "react";
import styles from "./FooterScreen.module.css";
import { FaTwitter, FaDiscord } from "react-icons/fa";

function index() {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["flex-box"]}>
          <img
            src={"/images/monkai_white.png"}
            alt="monkai"
            className={styles["monkai-logo"]}
          />
        </div>
        {/* <div className="footer-bottom">
          <div className="copyright">
            <p>MONKAI. All Rights Reserved</p>
          </div>

          <div className="social">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter color="#fff" className="social-icon" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord color="#fff" className="social-icon" />
            </a>
          </div>

          <div className="text">Los Angeles, California</div>
        </div> */}
      </div>
    </div>
  );
}

export default index;
