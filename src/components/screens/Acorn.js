import React from "react";
import w3 from "../images/w3.svg";
import styles from "./Easi.module.css";
import Header from "../common/Header/Header";
import "../images/acorn.png";
import ClientsReview from "../images/ClientsReview.svg";

const Acorn = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={`${styles.container} mt-[150px]`}>
        <img src={w3} alt="" className={styles.image} />
        <div className="text-left px-12 ">
          <p className={styles.title}>Acorn</p>
          <p className={`${styles.text} my-5`}>
            Project URL :{" "}
            <a
              href="https://acornconnections.com/"
              style={{ color: "#032887" }}
            >
              https://acornconnections.com/
            </a>
          </p>
          <p className={`${styles.text} my-5`}>Categories : Websites</p>
          <p className={styles.text}>Tools : Adobe Photoshop</p>
        </div>
      </div>
      <img src={require("../images/acorn.png")} alt="" className="mt-20" />
      {/* <img src={ClientsReview} alt="" className={styles.ClientReview} /> */}
    </div>
  );
};

export default Acorn;
