import React from "react";
import logo2 from "../images/logo2.svg";
import styles from "./Easi.module.css";
import Header from "../common/Header/Header";
import "../images/ChatGPT.png";
import ClientsReview from "../images/ClientsReview.svg";

const KeepMoving = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={logo2} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Chat GPT</p>
          <p className={`${styles.text} my-5`}>Categories : UI/UX Design</p>
          <p className={styles.text}>Tools : Adobe XD, Adobe Illustrator</p>
        </div>
      </div>
      <img src={require("../images/ChatGPT.png")} alt="" className="mt-20" />
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
    </div>
  );
};

export default KeepMoving;
