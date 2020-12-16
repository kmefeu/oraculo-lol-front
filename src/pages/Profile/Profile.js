import React from 'react';
import Brand from "../../assets/svg/oraculo.svg";
import './Profile.css';
import MatchHistory from '../../components/MatchHistory/MatchHistory';
import { useState, useEffect } from 'react';
import loadSummoner from '../../api/summonerInfo';
import SrcBar from "../../components/SrcBar/SrcBar"
import Flag from "../../components/Flag/Flag"
import Ranked from "../../components/Ranked/Ranked"
import Loading from "../../components/Loading/Loading"
import Level from "../../assets/svg/Simple-Border.svg";
import Icon from "../../assets/png/wolf-icon.png";

function Profile({ location }) {
  const [loading, setLoading] = useState(false);
  const [summoner, setSummoner] = useState({});

  //   useEffect(()=> {
  //    loadSummoner(location.state.invocador,setSummoner,setLoading);
  //  },[loadSummoner]);

  return (
    <>
      {loading ? (
       <Loading/>
      ) : (
          <section className="profileBg">
            <div className="profileContainer">

              <header className="profileHeader">
                <a href="/"><img className="brandHeader" src={Brand} /></a>
                <div className="profileSrcBar"><SrcBar /></div>
              </header>

              <main className="profileMainContainer">

                <section className="profileLeftColum">
                  <Flag />
                  <Ranked />
                </section>


                <div className="profileMatchHistory"><MatchHistory /></div>

              </main>
            </div>
          </section>
        )}
    </>
  );
}

export default Profile;