import React from "react";
import heroimage from "../../assets/vibrating-headphone.png";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.herotitle}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img className={styles.heroimg} src={heroimage} alt="headphone" />
    </section>
  );
};

export default Hero;
