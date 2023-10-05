import React from "react";
import w2 from "../images/w2.svg";
import styles from "./Easi.module.css";
import Header from "../common/Header/Header";
import "../images/jPadW.png";
import ClientsReview from "../images/ClientsReview.svg";

const jPad = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={w2} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>J-Pad</p>
          <p className={`${styles.text} my-5`}>
            Project URL :{" "}
            <a href="https://j-pad.net/" style={{ color: "#032887" }}>
              https://j-pad.net/
            </a>
          </p>
          <p className={`${styles.text} my-5`}>Categories : Websites</p>
          <p className={styles.text}>Tools : Adobe Photoshop</p>
        </div>
      </div>
      <img src={require("../images/jPadW.png")} alt="" className="mt-20" />
      <img src={ClientsReview} alt="" className={styles.ClientReview} />
    </div>
  );
};

export default jPad;
