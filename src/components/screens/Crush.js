import React from "react";
import logo4 from "../images/logo4.svg";
import styles from "./Easi.module.css";
import Header from "../common/Header/Header";
import "../images/crushApp.png";
import ClientsReview from "../images/ClientsReview.svg";

const Crush = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={logo4} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Crush App</p>
          {/* <p className={`${styles.text} my-5`}>
            Project URL : https://nantucketrentals.com/
          </p> */}
          <p className={`${styles.text} my-5`}>Categories : UI/UX Design</p>
          <p className={styles.text}>Tools : Adobe XD, Adobe Illustrator</p>
        </div>
      </div>
      <img src={require("../images/crushApp.png")} alt="" className="mt-20" />
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
    </div>
  );
};

export default Crush;
