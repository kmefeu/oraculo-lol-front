import React from 'react';
import WinRate from "../WinRate/WinRate"
import MatchCard from "../MatchCard/MatchCard"
import './MatchHistory.css'

function MatchHistory() {
    return (
        <div className="matchContainer">

            <WinRate />

            <div className="matchHistoryContainer">

                <ul>
                    
            
                <MatchCard />
                <MatchCard />
                <MatchCard />
                
                
                </ul>

            </div>
        </div>
    );
}

export default MatchHistory;