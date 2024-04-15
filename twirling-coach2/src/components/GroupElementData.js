import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

const GroupElementData = () => {
    const [groupElementData, setGroupElementData] = useState([]);


    const getData = () => {
        axios.get(apiUrl + "group_elements")
        .then((response) => {
            setGroupElementData(response.data) 
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
        { groupElementData.map((element, index) => (
            <Link key={index} className="TechnicButton" to={{
                pathname: "/technic/" + element.id,
            }}>
                {element.name.toUpperCase()}
            </Link>
        ))}
      </>
      )
    };  
    export default GroupElementData;