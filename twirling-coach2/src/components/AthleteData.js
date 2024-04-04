import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AthleteData = () => {
    const [athleteData, setAthleteData] = useState([]);


    const getData = () => {
        axios.get("http://localhost:8000/api/athletes")
        .then((response) => {
            setAthleteData(response.data) 
        })
        .catch(error => {
        console.log(error);
        }); 
    
    }

    useEffect(() => {
        getData();
      }, []);

  
    return (
      <>
        { athleteData.map((element, index) => (
            <div key={index} className="TechnicButton">
                {element.firstname.toUpperCase()}
            </div>
        ))}
      </>
      )
    };  
    export default AthleteData;