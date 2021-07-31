import React from "react";
import "./styles.css";
import Videoo from './videoo'
function Video() {
  return (
    <div className="video">
      <h1>Watch Trailer</h1>

      {/* <div class="video-item">
        <div className="video-wrapper">
          <h3>Season 1</h3>
          <ReactPlayer
            className="react-player"
            
            
            controls
            url="https://www.youtube.com/watch?v=fvCdLmxnkj0"
          />
        </div> */}
        {/* <div className="video-wrapper">
          <h3>Season 2</h3>
          <ReactPlayer
            width="360px"
            height="auto"
            className="react-player"
            controls
            url="https://www.youtube.com/watch?v=ZAXA1DV4dtI"
          />
        </div>
        <div className="video-wrapper">
          <h3>Season 3</h3>
          <ReactPlayer
            width="100%"
            height="100%"
            className="react-player"
            controls
            url="https://www.youtube.com/watch?v=erNiLcFm-0Q"
          />
        </div>
        <div className="video-wrapper">
          <h3>Season 4</h3>
          <ReactPlayer
            width="100%"
            height="100%"
            className="react-player"
            controls
            url="https://www.youtube.com/watch?v=p_PJbmrX4uk"
          />
        </div>
        <div className="player-wrapper1">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
          />
        </div> */}
        {/* </div> */}
      <Videoo/>
    </div>
  );
}

export default Video;
