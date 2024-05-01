import VariationData from "../components/VariationData";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const NewTopic = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const onImageChange = (image) => {
    setName(image.target.files[0].name.slice(0, -4))
    setImage(image.target.files[0]);
  }; 

  const onPressStore = () => {    
    let formData = new FormData();

    formData.append('name', name);
    formData.append('image', image); 
    
    const onSuccess = () => {
      navigate('/')
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.post(apiUrl + "newTopicality", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(onSuccess).catch(onFailure)
  };  

    return ( 
      <div className="TechnicContainer">
        <div className="Title">
          <a>Nouvelle Topic</a>
        </div>
        
        <div className="StoreArea">
          <label className="label">image</label>
          <input type="file" className="text_input" onChange={onImageChange}></input>
          <input type="submit" className="submit" onClick={onPressStore} value={"Ajouter"}></input>
        </div>
      </div>
      ) 
    };  
    export default NewTopic;