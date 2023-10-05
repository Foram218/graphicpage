import React from "react";
import logo5 from "../images/logo5.svg";
import styles from "./Easi.module.css";
import Header from "../common/Header/Header";
import "../images/inbines.png";
import ClientsReview from "../images/ClientsReview.svg";

const Inbines = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={logo5} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Inbines</p>
          {/* <p className={`${styles.text} my-5`}>
            Project URL : https://nantucketrentals.com/
          </p> */}
          <p className={`${styles.text} my-5`}>Categories : UI/UX Design</p>
          <p className={styles.text}>Tools : Adobe XD, Adobe Illustrator</p>
        </div>
      </div>
      <img src={require("../images/inbines.png")} alt="" className="mt-20" />
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
    </div>
  );
};

export default Inbines;
