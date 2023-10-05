import React from "react";
import brochure2 from "../images/brochure2.svg";
import styles from "./Easi.module.css";
import Header from "../common/Header/Header";
import "../images/brochure.png";
// import ClientsReview from "../images/ClientsReview.svg";

const Brochure = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={brochure2} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Brochure</p>
          {/* <p className={`${styles.text} my-5`}>Project URL :</p> */}
          <p className={`${styles.text} my-5`}>Categories : Brochure</p>
          <p className={styles.text}>Tools : Figma</p>
        </div>
      </div>
      <img src={require("../images/brochure.png")} alt="" className="mt-20" />
      {/* <img src={ClientsReview} alt="" className={styles.ClientReview} /> */}
    </div>
  );
};

export default Brochure;
