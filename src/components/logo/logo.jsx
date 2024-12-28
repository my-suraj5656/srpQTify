import React from "react";
import logoimg from "../../assets/logo.png";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logodiv}>
      <img src={logoimg} alt="logo" />
    </div>
  );
};

export default Logo;
