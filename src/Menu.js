import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import React, { useState } from "react";
import { Link as Link1 } from "react-scroll";
import "./styles.css";
import { Collapse } from "@material-ui/core";
import ProgressBar from "./ProgressBar";
import Video from "./Video";

const Menu = () => {
  const [color1, setcolor1] = useState(false);
  const [color2, setcolor2] = useState(false);
  const [color3, setcolor3] = useState(false);
  const [color4, setcolor4] = useState(false);
  const [color5, setcolor5] = useState(false);
  const [play,setplay]=useState(false);
  console.log("color1", color1);
  const isStart = (start) => {
    if (start === true) {
      console.log("color1 before", color1);
      if (color1 === false) {
        handleSercolor1();
        console.log("color1 after", color1);
      }
    }
  };
  const isPlay = (play) => {
    if (play === true) {
      //console.log("color1 before",color1)
      if (color1 === false) {
        handleSercolor1();
        //console.log("color1 after",color1)
      }
    } else {
      if (color1 === true) {
        handleSercolor1();
        //console.log("color1 after",color1)
      }
    }
  };
  const iswatched = (watch) => {
    console.log("Menu", watch);
    if (watch === true) {
      console.log("color2 before", color2);
      if (color2 === false) {
        console.log("color2", color2);
        handleSercolor2();
      }
      if (color1 === true) {
        handleSercolor1();
      }
    }
  };

  const isPause = (pause) => {
    if (pause === true) {
      if (color1 === true) {
        handleSercolor1();
      }
    } else {
      if (color1 === false) {
        handleSercolor1();
      }
    }
  };
  const handleSercolor1 = () => {
    setplay(!play)
    setcolor1(!color1);
  };
  const handleSercolor2 = () => {
    setcolor2(!color2);
  };
  const handleSercolor3 = () => {
    if (color4 === false && color3 === false) {
      setcolor3(!color3);
    } else if (color3 === true && color4 === false) {
      setcolor3(!color3);
    } else if (color3 === false && color4 === true) {
      setcolor3(!color3);
      setcolor4(!color4);
    }
  };
  const handleSercolor4 = () => {
    if (color3 === false && color4 === false) {
      setcolor4(!color4);
    } else if (color4 === true && color3 === false) {
      setcolor4(!color4);
    } else if (color4 === false && color3 === true) {
      setcolor3(!color3);
      setcolor4(!color4);
    }
  };
  const handleSercolor5 = () => {
    setcolor5(!color5);
  };
  return (
    <div className="Menu">
      <div className="lower">
        <div className="menu">
          <div className={!color1 ? "menu-item" : "menu-item-active"}>
            <span className="play">Play</span>
            <Link1
              to="video"
              smooth={true}
              duration={1000}
              className={!color1 ? "menu-item" : "menu-item-active"}
            >
              <PlayCircleFilledWhiteOutlinedIcon
                onClick={handleSercolor1}
              ></PlayCircleFilledWhiteOutlinedIcon>
            </Link1>
          </div>
          <div className={!color2 ? "menu-item" : "menu-item-active"}>
            <span className="Watched">Watched</span>
            <CheckCircleOutlineOutlinedIcon onClick={handleSercolor2} />
          </div>
          <div className={!color3 ? "menu-item" : "menu-item-active"}>
            <span className="like">Like</span>
            <ThumbUpAltOutlinedIcon onClick={handleSercolor3} />
          </div>
          <div className={!color4 ? "menu-item" : "menu-item-active"}>
            <span className="DisLike"> Unlike</span>
            <ThumbDownAltOutlinedIcon onClick={handleSercolor4} />
          </div>
          <div className={!color5 ? "menu-item" : "menu-item-active"}>
            <span className="Description">Description</span>
            <ArrowDropDownCircleOutlinedIcon onClick={handleSercolor5} />
          </div>
        </div>
      </div>
      <div>
        <Collapse in={color5}>
          <div className="des">
            <h3>
              Money Heist (Spanish: La casa de papel, "The House of Paper") is a
              Spanish heist crime drama television series created by Álex Pina.
              The series traces two long-prepared heists led by the Professor
              (Álvaro Morte), one on the Royal Mint of Spain, and one on the
              Bank of Spain. The narrative is told in a real-time-like fashion
              and relies on flashbacks, time-jumps, hidden character
              motivations, and an unreliable narrator for complexity. The series
              subverts the heist genre by being told from the perspective of a
              woman, Tokyo (Úrsula Corberó), and having a strong Spanish
              identity, where emotional dynamics offset the perfect strategic
              crime.
            </h3>
          </div>
        </Collapse>
      </div>
      <ProgressBar />
      <div className="border"></div>
      <section id="video">
        <Video
          onEnd={iswatched}
          onPause={isPause}
          onStart={isStart}
          onPlay={isPlay}
          Play={play}
        />
      </section>
    </div>
  );
};
export default Menu;
