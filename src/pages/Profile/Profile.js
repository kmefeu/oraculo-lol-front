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

function Profile({ location }) {
  const [loading, setLoading] = useState(true);
  const [summoner, setSummoner] = useState({});

  useEffect(() => {
    loadSummoner(location.state.summoner, setSummoner, setLoading);
  }, [loadSummoner]);


  return (
    <>
      {loading ? (
        <Loading  summonerData={summoner}/>
      ) : (
          <section className="profileBg">
            <div className="profileContainer">

              <header className="profileHeader">
                <a href="/"><img className="brandHeader" src={Brand} /></a>

                <div className="profileSrcBar">
                  <SrcBar />
                </div>
              </header>

              <main className="profileMainContainer">

                <section className="profileLeftColum">
                  <Flag summonerData={summoner} />
                  <Ranked summonerData={summoner} />
                </section>

                <section className="profileMatchHistory">
                  <MatchHistory summonerData={summoner} />
                </section>

              </main>
            </div>
          </section>
        )}
    </>
  );
}

export default Profile;