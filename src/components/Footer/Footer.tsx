import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; Hack the Break 2023. <br className="footerParaBreak1" /> All
        rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
