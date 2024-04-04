import VariationData from "../components/VariationData";
import {useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";



const NewAthlete = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [group1, setGroup1] = useState("");
  const [group2, setGroup2] = useState("");

  const onFirstnameChange = (firstname) => {
    setFirstname(firstname.target.value);
  };  

  const onGroup1Change = (group1) => {
    setGroup1(group1);
  };  

  const onGroup2Change = (group2) => {
    setGroup2(group2);
  };  

  const onPressStore = () => { 
    let payload = {firstname: firstname, group1: group1, group2: group2 };
    console.log(group1)
    console.log(group2)
    const onSuccess = () => {
      navigate('/athlete')
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.post("http://localhost:8000/api/newAthlete", payload ).then(onSuccess).catch(onFailure)
  };  

    return ( 
      <div className="TechnicContainer">
        <div className="Title">
          <a>Nouvelle Athlete</a>
        </div>
        
        <div className="StoreArea">
          <label className="label">Prénom</label>
          <input defaultValue={firstname} className="text_input" onChange={onFirstnameChange}></input>
          
          <label className="label">Groupe 1</label>
          <select 
            className="text_input"
            defaultValue=""
            onChange={(event) => onGroup1Change(event.target.value)
          }>
            <option value="">aucun</option>
            <option value="1">Lundi</option>
            <option value="2">Jeudi</option>
            <option value="3">Vendredi 1</option>
            <option value="4">Vendredi 2</option>
            <option value="5">Samedi</option>
          </select>
          
          <label className="label">Groupe 2</label>
          <select 
            className="text_input"
            defaultValue=""
            onChange={(event) => onGroup2Change(event.target.value)
          }>
            <option value="">aucun</option>
            <option value="1">Lundi</option>
            <option value="2">Jeudi</option>
            <option value="3">Vendredi 1</option>
            <option value="4">Vendredi 2</option>
            <option value="5">Samedi</option>
          </select>

          <input type="submit" className="submit" onClick={onPressStore} value={"Ajouter"}></input>
        </div>
      </div>
      ) 
    };  
    export default NewAthlete;