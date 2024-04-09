import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MusicData = () => {
    const [elementData, setElementData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/musics`);
          setElementData(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); // Effect se déclenche à chaque changement d'ID
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <>
      
        { elementData.map((element, index) => (
            
              element.name.toUpperCase()
        ))}
      </>
      )
    };  
export default MusicData