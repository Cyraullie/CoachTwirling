import { Link } from "react-router-dom";
import axios from "axios";
/*
<Link className="AddButton" to={{
                pathname: "/athlete_new",
            }}>
                <img src="/plus.png" />
            </Link>
*/

import React, { useState, useEffect } from 'react';

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2); 
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [tracks, setTracks] = useState([])
  const [tracksName, setTracksName] = useState([])
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/musics`);
        setTracks(response.data.map(track => track.filename.substring(0, track.filename.length - 4)));
        setTracksName(response.data.map(track => track.name));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && error == null) {
      const audioElement = document.getElementById('myAudio');
      if(audioElement != null){
        audioElement.volume = volume;
  
      // Mise à jour de l'état de la durée totale de la piste lorsque les métadonnées de la piste sont chargées
      audioElement.addEventListener('loadedmetadata', () => {
        setDuration(audioElement.duration);
      });
  
      // Mise à jour de l'état du temps de lecture lors de la lecture de la musique
      audioElement.addEventListener('timeupdate', () => {
        setCurrentTime(audioElement.currentTime);
      });
  
      // Nettoyage de l'écouteur d'événements lorsque le composant est démonté
      return () => {
        audioElement.removeEventListener('loadedmetadata', () => {});
        audioElement.removeEventListener('timeupdate', () => {});
      };
    }
    }
  }, [loading, error]);
  
  // Fonction pour basculer la lecture de la musique
  function togglePlay() {
    const audioElement = document.getElementById('myAudio');
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleVolumeChange(event) {
    const newVolume = event.target.value;
    setVolume(newVolume);
    const audioElement = document.getElementById('myAudio');
    audioElement.volume = newVolume;
  }

  function handleNextTrack() {
    setIsPlaying(false);
    const nextTrackIndex = (currentTrack + 1) % tracks.length; // Calcul de l'indice de la piste suivante
    setCurrentTrack(nextTrackIndex);
    playTrack(nextTrackIndex)
  }

  function handlePreviousTrack() {
    setIsPlaying(false);
    const previousTrackIndex = (currentTrack - 1 + tracks.length) % tracks.length; // Calcul de l'indice de la piste précédente
    setCurrentTrack(previousTrackIndex);
    playTrack(previousTrackIndex)
  }

  function switchTrack(trackIndex) {
    setIsPlaying(false);
    setCurrentTrack(trackIndex);
    playTrack(trackIndex)
  }

  function playTrack(trackIndex) {
    const audioElement = document.getElementById('myAudio');
    audioElement.src = "/musics/" + tracks[trackIndex] + ".mp3"; // Changement de la source audio vers la piste spécifiée

  }

  function handleSeek(event) {
    const audioElement = document.getElementById('myAudio');
    const seekTime = event.target.value;
    audioElement.currentTime = seekTime;
  }
  
  function toggleOpenState() {
    setShowPlaylist(!showPlaylist);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    
    <div className="MusicContainer">
      <h1>Musique</h1>
      <div className="MusicArea">

        <audio id="myAudio" loop >
          {/* Chaque élément <source> doit être fermé correctement */}
          <source src={"/musics/" + tracks[currentTrack] + ".mp3"} type="audio/mpeg" />
          <p>Votre navigateur ne prend pas en charge l'élément audio.</p>
        </audio>

        <div className="MusicImage">
            <img className="MusicImage" src={"/musics/" + tracks[currentTrack] + ".png"} alt="image de la musique"></img>
          </div>
        <div className="MusicTitre">
        <a>{tracksName[currentTrack]}</a>
        </div>
          <input className="MusicAvancement"
            type="range"
            min="0"
            max={duration}
            value={currentTime} // Assurez-vous de diviser par la durée totale pour obtenir une valeur entre 0 et 1
            onChange={handleSeek}
          />
        <div className="MusicTimer">
          <a>{Math.floor(currentTime/60) + ":" + Math.floor(currentTime%60)}</a>
          <a>{Math.floor(duration/60) + ":" + Math.floor(duration%60)}</a>
        </div>
        

        <div className="MusicControls">
          <a className="MusicBefore" onClick={handlePreviousTrack}>
            <img className="MusicButton" src='/previous.png'></img>
          </a>
          <a className="MusicPlayPause" onClick={togglePlay}>
            <img className="MusicButton" src={isPlaying ? '/pause.png' : '/play.png'}></img>
          </a>
          <a className="MusicNext" onClick={handleNextTrack}>
            <img className="MusicButton" src='/next.png'></img>
          </a>
        </div>
          <div className="MusicVolumeArea">
            
          <img className="MusicIcon" src='/mute.png'></img>
            <input
              className="MusicVolume"
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
            />
            <img className="MusicIcon" src='/sound.png'></img>
        </div>

        <div className="MusicPlaylist">
        <h2 className="PlaylistTitle no-select" onClick={() => toggleOpenState()}>PlayList</h2>
          {showPlaylist && tracks.map((element, index) => (
            <div onClick={() => switchTrack(index)}>
              <a>{index+1 + "." }</a>
              <a>{element}</a>
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
    )
  };  
  export default Music;