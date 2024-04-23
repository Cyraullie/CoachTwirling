import ElementData from "../components/ElementData";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const Element = () => {
  let { groupElementId, levelId } = useParams();
  const [technicName, setTechnicName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl + `group_elements/${groupElementId}/levels/${levelId}`);
        setTechnicName(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [levelId]); // Effect se déclenche à chaque changement d'ID

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

    return (
      <div className="TechnicContainer">
        <div className="TitleElement">
          <a>{technicName[0]}</a>
          <a>{technicName[1]}</a>
          
        </div>
        
        <div className="TechnicArea">
          <ElementData groupElementId={groupElementId} levelId={levelId}/>
        </div>
        <Link className="AddButton" to={{
                pathname: "/technic/" + groupElementId + "/level/" + levelId + "/element_new",
            }}>
                <img src="./plus.png" />
            </Link>
      </div>
      )
    };  
    export default Element;