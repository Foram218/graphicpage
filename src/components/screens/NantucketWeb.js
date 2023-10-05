import React from "react";
import NRweb from "../images/NRweb.svg";
import styles from "./Easi.module.css";
import Header from "../common/Header/Header";
import "../images/website1.png";
import ClientsReview from "../images/ClientsReview.svg";

const NantucketWeb = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={NRweb} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Nantucket Rentals</p>
          <p className={`${styles.text} my-5`}>
            Project URL : https://nantucketrentals.com/
          </p>
          <p className={`${styles.text} my-5`}>Categories : Websites</p>
          <p className={styles.text}>Tools : Adobe Photoshop</p>
        </div>
      </div>
      <img src={require("../images/website1.png")} alt="" className="mt-20" />
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
    </div>
  );
};

export default NantucketWeb;
