import React from "react";
import GraphicProjects from "./GraphicProjects";
// import styles from "./GraphicDesign.module.css";
import w1 from "../components/images/w1.svg";
import w2 from "../components/images/w2.svg";
import w3 from "../components/images/w3.svg";
import { useNavigate } from "react-router-dom";
// import SocialMedia1 from "../components/images/SocialMedia1.svg";
// import AppPreview1 from "../components/images/AppPreview1.svg";
// import ProductDesign1 from "../components/images/ProductDesign1.svg";
// import LogoDesign1 from "../components/images/LogoDesign1.svg";
// import Brochure1 from "../components/images/Brochure1.svg";
import crushApp from "../components/images/crushApp.svg";
import nan from "../components/images/nan.svg";
import enroll from "../components/images/enroll.svg";
import jp from "../components/images/jp.svg";
import chatGPT from "../components/images/chatGPT.svg";
import jpAdmin from "../components/images/jpAdmin.svg";
import AD1 from "../components/images/AD1.svg";
import AD2 from "../components/images/AD2.svg";
import AD3 from "../components/images/AD3.svg";
import AD4 from "../components/images/AD4.svg";
import AD5 from "../components/images/AD5.svg";
import AD6 from "../components/images/AD6.svg";
import logo1 from "../components/images/logo1.svg";
import logo2 from "../components/images/logo2.svg";
import logo3 from "../components/images/logo3.svg";
import logo4 from "../components/images/logo4.svg";
import logo5 from "../components/images/logo5.svg";
// import logo6 from "../components/images/logo6.svg";
import brochure from "../components/images/brochure.svg";
import letter from "../components/images/letter.svg";
import jPad from "../components/images/jPad.svg";

const GraphicDesignProjects = ({ activeIndex }) => {
  const navigate = useNavigate();

  const platforms = [
    {
      id: "1",
      data: [
        {
          img: crushApp,
          name: "Crush Application - UI /UX Design",
          title: "CrushApp",
        },
        {
          img: nan,
          name: "Nantucket Rentals - UI /UX Design",
          title: "NantucketWeb",
        },
        {
          img: AD2,
          name: "Enrollin APP - UI /UX Design",
          title: "Enrollin",
        },
        {
          img: jp,
          name: "J-pad - Website Design",
          title: "jPad",
        },
        {
          img: chatGPT,
          name: "ChatGPT - Graphic Design",
          title: "ChatGPT",
        },
        {
          img: jpAdmin,
          name: "J-pad - Admin panel",
          title: "jPadAdminPanel",
        },
      ],
    },
    {
      id: "2",
      data: [
        {
          img: AD1,
          name: "Easi - UI /UX Design",
          title: "Easi",
        },
        {
          img: AD2,
          name: "Enrollin APP - UI /UX Design",
          title: "Enrollin",
        },
        {
          img: AD3,
          name: "Nantucket Rentals - UI /UX Design",
          title: "Nuntucket",
        },
        {
          img: AD4,
          name: "Sameep - UI /UX Design",
          title: "Sameep",
        },
        {
          img: AD5,
          name: "OpenAI - UI /UX Design",
          title: "OpenAI",
        },
        {
          img: AD6,
          name: "Crush Application - UI /UX Design",
          title: "CrushApp",
        },
      ],
    },
    {
      id: "3",
      data: [
        {
          img: logo1,
          name: "ChatGPT - Graphic Design",
          title: "ChatGPT",
        },
        {
          img: logo2,
          name: "Enrolin - Graphic Design",
          title: "EnrollinApp",
        },
        {
          img: logo3,
          name: "Epicseries - Graphic Design",
          title: "Epic",
        },
        {
          img: logo4,
          name: "Crush App - Graphic Design",
          title: "Crush",
        },
        {
          img: logo5,
          name: "Inbines - Graphic Design",
          title: "Inbines",
        },
        // {
        //   img: logo6,
        //   name: "Motatapu - Graphic Design",
        // },
      ],
    },
    // {
    //   id: "4",
    //   data: [
    //     {
    //       img: SocialMedia1,
    //     },
    //     {
    //       img: AppPreview1,
    //     },
    //     {
    //       img: ProductDesign1,
    //     },
    //     {
    //       img: LogoDesign1,
    //     },
    //     {
    //       img: Brochure1,
    //     },
    //     {
    //       img: Website1,
    //     },
    //   ],
    // },
    {
      id: "4",
      data: [
        {
          img: w1,
          title: "NantucketWeb",
        },
        {
          img: w2,
          title: "jPad",
        },
        {
          img: w3,
          title: "Acorn",
        },
      ],
    },
    {
      id: "5",
      data: [
        {
          img: brochure,
          name: "Brochure ",
          title: "Brochure",
        },
        {
          img: letter,
          name: "Letter Head ",
          title: "Sp",
        },
        {
          img: jPad,
          name: "J-pad - Admin panel",
          title: "jPadAdminPanel",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap px-16 justify-center items-center ">
      {platforms[activeIndex].data.map((item, index) => {
        return (
          <GraphicProjects
            key={index}
            img={item.img}
            name={item.name}
            link={item.link}
            onClick={() => {
              console.log("res:=", item.title);
              const link = item.title.replace(/ /g, "");
              navigate(`/${link}`);
            }}
            // className={` ${styles.imgMainContent}  `}
          />
        );
      })}
    </div>
  );
};

export default GraphicDesignProjects;
