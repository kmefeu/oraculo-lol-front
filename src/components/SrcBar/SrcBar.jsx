import React, { useState } from "react";
import Src from "../../assets/svg/src.svg";
import "./SrcBar.css";
import { useHistory } from "react-router-dom";

function SrcBar() {
  const history = useHistory();
  const [summoner, setSummoner] = useState("");

  function handleSubmit() {
    history.push("/profile", { summoner });
  }

  return (
    <form className="srcBarContainer"
    onSubmit={handleSubmit}>
      <input
        onChange={(event)=>{
          setSummoner(event.target.value)
        }}
        className="SrcBar"
        name="summonerName"
        placeholder="Buscar invocador"
      />
      <img className="SrcSvg" src={Src} />
    </form>
  );
}

export default SrcBar;
