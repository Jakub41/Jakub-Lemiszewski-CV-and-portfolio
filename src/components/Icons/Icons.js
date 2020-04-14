import React from "react";
import NodeIcon from "../../media/Node.png";
import MongoIcon from "../../media/MongoDB.png";
import JsIcon from "../../media/JS.png";
import NpmIcon from "../../media/npm.png";
import ReactIcon from "../../media/React.png";
import RedisIcon from "../../media/Redis.png";
import PsqlIcon from "../../media/Psql.png";
import GitIcon from "../../media/Git.png";
import StackOverFlowIcon from "../../media/Stack-overflow.png";
import ManagerIcon from "../../media/Management.png";
import HtmlIcon from "../../media/Html-5.png";
import CssIcon from "../../media/Css3.png";
import { IconStyle, Img } from "./styles";

const Icons = () => {
  const ico = [
    <Img src={NodeIcon} alt="nodeJS" />,
    <Img src={MongoIcon} alt="mongoDB" />,
    <Img src={JsIcon} alt="JsIcon" />,
    <Img src={NpmIcon} alt="NpmIcon" />,
    <Img src={ReactIcon} alt="ReactIcon" />,
    <Img src={RedisIcon} alt="RedisIcon" />,
    <Img src={PsqlIcon} alt="PsqlIcon" />,
    <Img src={GitIcon} alt="GitIcon" />,
    <Img src={StackOverFlowIcon} alt="StackOverFlowIcon" />,
    <Img src={ManagerIcon} alt="ManagerIcon" />,
    <Img src={HtmlIcon} alt="HtmlIcon" />,
    <Img src={CssIcon} alt="CssIcon" />,
  ];

  return (
    <ul>
      {ico.map((ico, i) => (
        <IconStyle key={i}>{ico}</IconStyle>
      ))}
    </ul>
  );
};

export default Icons;
