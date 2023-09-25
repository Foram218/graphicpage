import React from "react";
import GraphicProjects from "./GraphicProjects";
import w1 from "../components/images/w1.svg";
import w2 from "../components/images/w2.svg";
import { useNavigate } from "react-router-dom";
import SocialMedia1 from "../components/images/SocialMedia1.svg";
import AppPreview1 from "../components/images/AppPreview1.svg";
import ProductDesign1 from "../components/images/ProductDesign1.svg";
import LogoDesign1 from "../components/images/LogoDesign1.svg";
import Brochure1 from "../components/images/Brochure1.svg";
import Website1 from "../components/images/Website1.svg";
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
import logo6 from "../components/images/logo6.svg";
import MicrosoftTeam from "../components/images/MicrosoftTeam.svg";
import Jira from "../components/images/Jira.svg";
import Trello from "../components/images/Trello.svg";
import Asana from "../components/images/Asana.svg";
import Slack from "../components/images/Slack.svg";

const GraphicDesignProjects = ({ activeIndex }) => {
  const navigate = useNavigate();

  const platforms = [
    {
      id: "1",
      data: [
        {
          img: SocialMedia1,
        },
        {
          img: AppPreview1,
        },
        {
          img: ProductDesign1,
        },
        {
          img: LogoDesign1,
        },
        {
          img: Brochure1,
        },
        {
          img: Website1,
        },
      ],
    },
    {
      id: "2",
      data: [
        {
          img: AD1,
        },
        {
          img: AD2,
        },
        {
          img: AD3,
        },
        {
          img: AD4,
        },
        {
          img: AD5,
        },
        {
          img: AD6,
        },
      ],
    },
    {
      id: "3",
      data: [
        {
          img: logo1,
        },
        {
          img: logo2,
        },
        {
          img: logo3,
        },
        {
          img: logo4,
        },
        {
          img: logo5,
        },
        {
          img: logo6,
        },
      ],
    },
    {
      id: "4",
      data: [
        {
          img: SocialMedia1,
        },
        {
          img: AppPreview1,
        },
        {
          img: ProductDesign1,
        },
        {
          img: LogoDesign1,
        },
        {
          img: Brochure1,
        },
        {
          img: Website1,
        },
      ],
    },
    {
      id: "5",
      data: [
        {
          img: w1,
        },
        {
          img: w2,
        },
      ],
    },
    {
      id: "6",
      data: [
        {
          img: MicrosoftTeam,
        },
        {
          img: Jira,
        },
        {
          img: Trello,
        },
        {
          img: Asana,
        },
        {
          img: Slack,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap px-16 justify-center items-center ">
      {platforms[activeIndex].data.map((item, index) => {
        return <GraphicProjects key={index} img={item.img} name={item.name} />;
      })}
    </div>
  );
};

export default GraphicDesignProjects;
