import React from "react";
import styles from "./Platform.module.css";
import Technologies from "./Technologies";
import MySQL from "../images/mySQL.svg";
import MSSQL from "../images/msSQL.svg";
import MongoDB from "../images/mongoDB.svg";
import SQLite from "../images/SQLite.svg";
import PostgreSQL from "../images/PostgreSQL.svg";
import Firebase from "../images/Firebase.svg";
import Realm from "../images/Realm.svg";
import SubmitIcon from "../images/teamBtn.svg";
import { useNavigate } from "react-router-dom";
import AngularJS from "../images/angularJS.svg";
import Vue from "../images/vue.svg";
import ReactJS from "../images/reactJS.svg";
import NextJS from "../images/nextJS.svg";
import NodeJS from "../images/nodeJS.svg";
import PHP from "../images/php.svg";
import JAVA from "../images/java.svg";
import iOS from "../images/iOSMobile.svg";
import Android from "../images/AndroidMobile.svg";
import ReactNative from "../images/reactNativeMobile.svg";
import Flutter from "../images/flutterMobile.svg";
import MicrosoftTeam from "../images/MicrosoftTeam.svg";
import Jira from "../images/Jira.svg";
import Trello from "../images/Trello.svg";
import Asana from "../images/Asana.svg";
import Slack from "../images/Slack.svg";
import AI from "../images/AI.svg";
import Figma from "../images/figma.svg";
import PS from "../images/PS.svg";

const Platform = ({ activeIndex }) => {
  const navigate = useNavigate();

  const platforms = [
    {
      id: "1",
      data: [
        {
          img: AngularJS,
          name: "Angular JS",
        },
        {
          img: Vue,
          name: "Vue",
        },
        {
          img: ReactJS,
          name: "React JS",
        },
        {
          img: NextJS,
          name: "Next JS",
        },
      ],
    },
    {
      id: "2",
      data: [
        {
          img: NodeJS,
          name: "Node JS",
        },
        {
          img: PHP,
          name: "PHP",
        },
        {
          img: JAVA,
          name: "Java",
        },
      ],
    },
    {
      id: "3",
      data: [
        {
          img: iOS,
          name: "iOS",
        },
        {
          img: Android,
          name: "Android",
        },
        {
          img: ReactNative,
          name: "React Native",
        },
        {
          img: Flutter,
          name: "Flutter",
        },
      ],
    },
    {
      id: "4",
      data: [
        {
          img: PS,
          name: "Adobe Photoshop",
        },
        {
          img: Figma,
          name: "Figma",
        },
        {
          img: AI,
          name: "Adobe Illustrator",
        },
      ],
    },
    {
      id: "5",
      data: [
        {
          img: MySQL,
          name: "My SQL",
        },
        {
          img: MSSQL,
          name: "MS-SQL",
        },
        {
          img: MongoDB,
          name: "MongoDB",
        },
        {
          img: SQLite,
          name: "SQLite",
        },
        {
          img: PostgreSQL,
          name: "PostgreSQL",
        },
        {
          img: Firebase,
          name: "Firebase",
        },
        {
          img: Realm,
          name: "Realm",
        },
      ],
    },
    {
      id: "6",
      data: [
        {
          img: MicrosoftTeam,
          name: "Microsoft Team",
        },
        {
          img: Jira,
          name: "Jira",
        },
        {
          img: Trello,
          name: "Trello",
        },
        {
          img: Asana,
          name: "Asana",
        },
        {
          img: Slack,
          name: "Slack",
        },
      ],
    },
  ];

  return (
    <div className={styles.platformContainer}>
      <div className={styles.platform}>
        {platforms[activeIndex].data.map((item, index) => {
          return <Technologies key={index} img={item.img} name={item.name} />;
        })}
      </div>
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={() => navigate("/ContactUs")}
        >
          <p className={styles.textOfButton}>Schedule A Developer Interview</p>
          <img src={SubmitIcon} alt="" className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Platform;
