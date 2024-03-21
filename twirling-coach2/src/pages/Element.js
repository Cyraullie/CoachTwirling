import ElementData from "../components/ElementData";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Element = () => {
  let { groupElementId, levelId } = useParams();
  const [technicName, setTechnicName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/group_elements/${groupElementId}/levels/${levelId}`);
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
      </div>
      )
    };  
    export default Element;