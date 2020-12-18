import Shield from "../../assets/png/Bronze-Rank.png";
import Shield2 from "../../assets/png/Silver-Rank.png";
import"./Ranked.css"

function Ranked({summonerData}) {
  return (
    <div className="rankedContainer">
      <div className="rankedElo">
        <h2>{summonerData.summoner?.rank[1].queueType.replace(/_/gm," ").replace("RANKED","")}</h2>
        <h3>{summonerData.summoner?.rank[1].tier +" "+ summonerData.summoner?.rank[1].rank}</h3>
        <img src={"https://api-lol-pecege.herokuapp.com"+summonerData.summoner?.rank[1].emblem} />
      </div>

      <div className="rankedElo">
      <h2>{summonerData.summoner?.rank[0].queueType.replace(/_/gm," ").replace("RANKED","")}</h2>
        <h3>{summonerData.summoner?.rank[0].tier +" "+ summonerData.summoner?.rank[0].rank}</h3>
        <img src={"https://api-lol-pecege.herokuapp.com"+summonerData.summoner?.rank[0].emblem} />
      </div>
    </div>
  );
}
export default Ranked;
