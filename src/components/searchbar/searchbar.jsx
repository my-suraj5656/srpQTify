import React from "react";
import styles from "./searchbar.module.css";
import { ReactComponent as Searchicon } from "../../assets/search-icon.svg";

const Searchbar = ({ search }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} type="text" placeholder={search} />
      <button className={styles.searchbutton}>
        <Searchicon />
      </button>
    </form>
  );
};

export default Searchbar;
