import React, { useState } from "react";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import {
  //   CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const smile = ["👈", "😤", "🥱", "🙂", "😊", "😍"];
const color = ["", "red", "orange", "rgb(241, 241, 66)", "#9ff025", "Green"];
export default function LinearDeterminate() {
  const [progress, setProgress] = useState(0);

  const handlersetProgressIncrease = () => {
    setProgress((oldProgress) => {
      if (oldProgress + 20 > 100) {
        return oldProgress;
      }
      return oldProgress + 20;
    });
  };
  const handlersetProgressDecrease = () => {
    setProgress((oldProgress) => {
      if (oldProgress - 20 < 0) {
        return oldProgress;
      }
      return oldProgress - 20;
    });
  };

  return (
    <div className="progress">
      <div className="bar">
        <h2>Rating </h2>
        <div className="change-bar">
          <AddOutlinedIcon onClick={handlersetProgressIncrease}>
            increase
          </AddOutlinedIcon>
        </div>
        <div className="change-bar">
          <RemoveOutlinedIcon onClick={handlersetProgressDecrease}>
            decrease
          </RemoveOutlinedIcon>
        </div>
        <div className="circleProgress">
          <CircularProgressbarWithChildren
            value={progress}
            text={`${smile[progress / 20]}`}
            strokeWidth={10}
            styles={buildStyles({
              textSize: "35px",
              textColor: "yellow",
              pathColor: color[progress / 20],
              trailColor: "grey",
            })}
            
          ><div className="circle">{progress/20}/5</div></CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
}
