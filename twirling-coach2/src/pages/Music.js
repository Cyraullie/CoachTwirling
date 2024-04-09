import { Link } from "react-router-dom";
import DataMusicView from "../components/MusicData";
/*
<Link className="AddButton" to={{
                pathname: "/athlete_new",
            }}>
                <img src="/plus.png" />
            </Link>
*/

import React, { useState } from 'react';

const Music = () => {

    return (
      <div className="MusicContainer">
        <h1>Musique</h1>
        <div className="MusicArea">

        <audio controls={true}>
        {/* Chaque élément <source> doit être fermé correctement */}
        <source src="/music/boss.mp3" type="audio/mpeg" />
        <p>Votre navigateur ne prend pas en charge l'élément audio.</p>
      </audio>
        </div>
        
      </div>
      )
    };  
    export default Music;