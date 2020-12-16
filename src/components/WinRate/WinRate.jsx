import React from "react";
import "./WinRate.css";

function WinRate() {
  return (
    <div className="winRateContainer">
      
      <div className="winRateInfo">
        <h2 className="winRateTitle">Win Rate</h2>
        <h2 className="rate">60%</h2>
      </div>

      <div className="rateBar">
        <div className="victories"></div>
        <div className="defeats"></div>
      </div>
      
    </div>
  );
}

export default WinRate;
