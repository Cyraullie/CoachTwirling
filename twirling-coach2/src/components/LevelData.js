import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LevelData = ({ groupElementId }) => {
    const [levelData, setLevelData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/group_elements/${groupElementId}/levels`);
          setLevelData(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [groupElementId]); // Effect se déclenche à chaque changement d'ID
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <>
      
        { levelData.map((element, index) => (
            <Link key={index} className="TechnicButton" to={{
              pathname: "/technic/" + groupElementId + "/level/" + element.id,
          }}>
              {element.name.toUpperCase()}
          </Link>
        ))}
      </>
      )
    };  
export default LevelData