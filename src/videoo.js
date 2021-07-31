import React from "react";
import ReactPlayer from "react-player";
import "./styles.css";

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=p_PJbmrX4uk"
        width="80%"
        height="80%"
        controls
      />
    </div>
  );
};
export default ResponsivePlayer;
