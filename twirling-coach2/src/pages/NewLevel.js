import VariationData from "../components/VariationData";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const NewLevel = () => {
  const navigate = useNavigate();
  let { groupElementId, levelId, elementId } = useParams();
  const [name, setName] = useState("");

  const onNameChange = (name) => {
    setName(name.target.value);
  };  

  const onPressStore = () => {    
    let payload = {name: name,  group_element_id: groupElementId};
    
    const onSuccess = () => {
      navigate('/technic/' + groupElementId)
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.post(apiUrl + "newLevel", payload ).then(onSuccess).catch(onFailure)
  };  

    return ( 
      <div className="TechnicContainer">
        <div className="Title">
          <a>Nouveau Niveau</a>
        </div>
        
        <div className="StoreArea">
          <label className="label">Nom</label>
          <input defaultValue={name} className="text_input" onChange={onNameChange}></input>
          <input type="submit" className="submit" onClick={onPressStore} value={"Ajouter"}></input>
        </div>
      </div>
      ) 
    };  
    export default NewLevel;