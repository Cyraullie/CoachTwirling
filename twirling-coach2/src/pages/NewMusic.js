import VariationData from "../components/VariationData";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const NewMusic = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [music, setMusic] = useState("");
  const [image, setImage] = useState("");

  const onNameChange = (name) => {
    setName(name.target.value);
  };  

  const onMusicChange = (music) => {
    setMusic(music.target.files[0]);
  }; 

  const onImageChange = (image) => {
    setImage(image.target.files[0]);
  }; 

  const onPressStore = () => {    
    let formData = new FormData();

    formData.append('name', name);
    formData.append('music', music); 
    formData.append('image', image); 
    
    const onSuccess = (t) => {
      navigate('/music/')
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.post(apiUrl + "newMusic", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(onSuccess).catch(onFailure)
  };  

    return ( 
      <div className="TechnicContainer">
        <div className="Title">
          <a>Nouvelle Musique</a>
        </div>
        
        <div className="StoreArea">
          <label className="label">Nom</label>
          <input defaultValue={name} className="text_input" onChange={onNameChange}></input>
          <label className="label">musique</label>
          <input type="file" className="text_input" onChange={onMusicChange}></input>
          <label className="label">image</label>
          <input type="file" className="text_input" onChange={onImageChange}></input>
          <input type="submit" className="submit" onClick={onPressStore} value={"Ajouter"}></input>
        </div>
      </div>
      ) 
    };  
    export default NewMusic;