import VariationData from "../components/VariationData";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const Variation = () => {
  let { groupElementId, levelId, elementId } = useParams();
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
  }, [elementId]); // Effect se déclenche à chaque changement d'ID

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
          <VariationData groupElementId={groupElementId} levelId={levelId} elementId={elementId}/>
          <Link className="AddButton" to={{
                pathname: "/technic/" + groupElementId + "/level/" + levelId + "/variation/" + elementId + "/variation_new",
            }}>
                <img src="./plus.png" />
            </Link>
        </div>
      </div>
      )
    };  
    export default Variation;