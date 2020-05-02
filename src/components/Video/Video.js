import React from "react";
import { VideoDiv, VideoIframe, PortfolioCard } from "./styles";

const Video = () => {
  const videoUrl = [
    "https://www.loom.com/embed/ec1063feb011482b8cbe10db98912c3f",
    "https://www.loom.com/embed/3a23fec4fdf0477cb6552f3b464b9e5c",
    "https://www.loom.com/embed/a4b4d48d2e394bf2a31df17fe7d8493d",
    "https://www.loom.com/embed/e937d4ce1f004ba38f42d1c91bd799b0",
  ];

  return (
    <ul>
      {videoUrl.map((video, i) => (
        <PortfolioCard key={i}>
          {" "}
          <VideoDiv>
            {" "}
            <VideoIframe
              src={video}
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></VideoIframe>
            ,
          </VideoDiv>
        </PortfolioCard>
      ))}
    </ul>
  );
};

export default Video;
