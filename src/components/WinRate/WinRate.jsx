import React from "react";
import "./WinRate.css";

function WinRate({ winRate }) {
  function win(winRate) {
    const result = {};
    return (result.win = "width:" + winRate + "%");
  }
  function lose(winRate) {
    const result = {};
    return (result.lose = "width:" + (100 - winRate) + "%");
  }

  return (
    <div className="winRateContainer">
      <div className="winRateInfo">
        <h2 className="winRateTitle">Win Rate</h2>
        <h2 className="rate">{winRate}%</h2>
      </div>
      <div className="rateBar">
        <div className="victories"></div>
        <div className="defeats"></div>
      </div>
    </div>
  );
}

export default WinRate;

// style={}
//style={}
