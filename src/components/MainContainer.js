import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import VideoCard from "./VideoCard";

const MainContainer = () => {
  return (
    <div>
      <ButtonList />
      <VideoContainer />
      <VideoCard />
    </div>
  );
};

export default MainContainer;
