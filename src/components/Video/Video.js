import React from "react";
import { VideoDiv, VideoIframe, PortfolioCard } from "./styles";

const Video = () => {
  const videoUrl = [
    <VideoIframe
      src="https://www.loom.com/embed/3a23fec4fdf0477cb6552f3b464b9e5c"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    ></VideoIframe>,
    <VideoIframe
      src="https://www.loom.com/embed/a4b4d48d2e394bf2a31df17fe7d8493d"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    ></VideoIframe>,
  ];

  return (
    <ul>
      {videoUrl.map((video, i) => (
        <PortfolioCard key={i}>
          {" "}
          <VideoDiv>{video}</VideoDiv>
        </PortfolioCard>
      ))}
    </ul>
  );
};

export default Video;
