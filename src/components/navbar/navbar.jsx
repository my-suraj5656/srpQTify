import React from "react";
import Logo from "../logo/logo";
import Searchbar from "../searchbar/searchbar";
import Button from "../button/button";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Logo />
        <Searchbar search={"Search a song of your choice"} />
        <Button children={"Give Feedback"} />
      </nav>
    </>
  );
};

export default Navbar;
