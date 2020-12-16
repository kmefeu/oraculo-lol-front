import React from "react";
import heroBg from "../../assets/png/yasuo.png";
import video from "../../assets/webm/hover4.mp4";
import "./MatchCard.css";

function MatchCard() {
  return (
    <li className="matchCard">
      <video
        width="980"
        height="140"
        className="hoverVideo"
        loop
        autoPlay
        id="video"
        onMouseOver={()=>{
          document.getElementById("video").get(0).play()
        }}
        
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="matchDetail">
        <h1>Vitória</h1>
        <h3>Yasuo</h3>
      </div>

      <h2>11/29/1</h2>

      <div className="matchResultGradient"></div>
      <div className="fadeGradient"></div>
      <img className="heroBg" src={heroBg} />
    </li>
  );
}

export default MatchCard;
