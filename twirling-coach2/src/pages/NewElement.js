import VariationData from "../components/VariationData";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NewElement = () => {
  const navigate = useNavigate();
  let { groupElementId, levelId, elementId } = useParams();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const onNameChange = (name) => {
    setName(name.target.value);
  };  

  const onLinkChange = (link) => {
    console.log(levelId)
    setLink(link.target.value);
  };  

  const onPressStore = () => {    
    let payload = {name: name, link: link, level_id: levelId};
    
    const onSuccess = () => {
      navigate('/technic/' + groupElementId + "/level/" + levelId)
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.post("http://localhost:8000/api/newElement", payload ).then(onSuccess).catch(onFailure)
  };  

    return ( 
      <div className="TechnicContainer">
        <div className="Title">
          <a>Nouvel Element</a>
        </div>
        
        <div className="StoreArea">
          <label className="label">Nom</label>
          <input defaultValue={name} className="text_input" onChange={onNameChange}></input>
          <label className="label">Lien</label>
          <input defaultValue={link} className="text_input" onChange={onLinkChange}></input>
          <input type="submit" className="submit" onClick={onPressStore} value={"Ajouter"}></input>
        </div>
      </div>
      ) 
    };  
    export default NewElement;