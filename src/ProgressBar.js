import React, { useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import {
  //   CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const smile = ["👈", "😤", "🥱", "🙂", "😊", "😍"];
const color = ["", "red", "orange", "rgb(241, 241, 66)", "#9ff025", "Green"];

export default function LinearDeterminate() {
  const [starcolor1, setstarcolor1] = useState(false);
  const [starcolor2, setstarcolor2] = useState(false);
  const [starcolor3, setstarcolor3] = useState(false);
  const [starcolor4, setstarcolor4] = useState(false);
  const [starcolor5, setstarcolor5] = useState(false);
  const [progress, setProgress] = useState(0);
  console.log("star1", starcolor1);
  console.log("star2", starcolor2);
  console.log("star3", starcolor3);
  console.log("star4", starcolor4);
  console.log("star5", starcolor5);
  const handlersetstarcolor1 = () => {
    setstarcolor1(!starcolor1);
    if (starcolor2 === true) {
      handlersetstarcolor2();
    }
    if (starcolor3 === true) {
      handlersetstarcolor3();
    }
    if (starcolor4 === true) {
      handlersetstarcolor4();
    }
    if (starcolor5 === true) {
      handlersetstarcolor5();
    }
    setProgress((oldProgress) => {
      if (starcolor1 === true) {
        return 0;
      }
      return (oldProgress = 20);
    });
  };
  const handlersetstarcolor2 = () => {
    setstarcolor2(!starcolor2);
    if (starcolor1 === false) {
      handlersetstarcolor1();
    }
    if (starcolor3 === true) {
      handlersetstarcolor3();
    }
    if (starcolor4 === true) {
      handlersetstarcolor4();
    }
    if (starcolor5 === true) {
      handlersetstarcolor5();
    }
    setProgress((oldProgress) => {
      if (starcolor2 === true) {
        return 20;
      }
      return (oldProgress = 40);
    });
  };
  const handlersetstarcolor3 = () => {
    if (starcolor1 === false) {
      handlersetstarcolor1();
    }
    if (starcolor2 === false) {
      handlersetstarcolor2();
    }
    setstarcolor3(!starcolor3);
    if (starcolor4 === true) {
      handlersetstarcolor4();
    }
    if (starcolor5 === true) {
      handlersetstarcolor5();
    }
    setProgress((oldProgress) => {
      if (starcolor3 === true) {
        return 40;
      }
      return (oldProgress = 60);
    });
  };
  const handlersetstarcolor4 = () => {
    if (starcolor1 === false) {
      handlersetstarcolor1();
    }
    if (starcolor2 === false) {
      handlersetstarcolor2();
    }
    if (starcolor3 === false) {
      handlersetstarcolor3();
    }
    setstarcolor4(!starcolor4);
    if (starcolor5 === true) {
      handlersetstarcolor5();
    }
    setProgress((oldProgress) => {
      if (starcolor4 === true) {
        return 60;
      }
      return (oldProgress = 80);
    });
  };
  const handlersetstarcolor5 = () => {
    setstarcolor5(!starcolor5);
    if (starcolor1 === false) {
      handlersetstarcolor1();
    }
    if (starcolor2 === false) {
      handlersetstarcolor2();
    }
    if (starcolor3 === false) {
      handlersetstarcolor3();
    }
    if (starcolor4 === false) {
      handlersetstarcolor4();
    }

    setProgress((oldProgress) => {
      if (starcolor5 === true) {
        return 80;
      }
      return (oldProgress = 100);
    });
  };
  return (
    <div className="progress">
      <div className="bar">
        <h2>Rating </h2>
        <div className="star">
          <div className={!starcolor1 ? "star-item" : "star-item-active"}>
            <StarIcon onClick={handlersetstarcolor1} />
          </div>
          <div className={!starcolor2 ? "star-item" : "star-item-active"}>
            <StarIcon onClick={handlersetstarcolor2} />
          </div>
          <div className={!starcolor3 ? "star-item" : "star-item-active"}>
            <StarIcon onClick={handlersetstarcolor3} />
          </div>
          <div className={!starcolor4 ? "star-item" : "star-item-active"}>
            <StarIcon onClick={handlersetstarcolor4} />
          </div>
          <div className={!starcolor5 ? "star-item" : "star-item-active"}>
            <StarIcon onClick={handlersetstarcolor5} />
          </div>
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
          >
            <div className="circle">{progress / 20}/5</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
}
