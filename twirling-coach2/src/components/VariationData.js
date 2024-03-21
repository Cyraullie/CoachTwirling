import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VariationData = ({ groupElementId, levelId, elementId }) => {
    const [elementData, setElementData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/group_elements/${groupElementId}/levels/${levelId}/elements/${elementId}/variations/`);
          console.log(response.data)
          setElementData(response.data);
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
      <>
      
        
      </>
      )
    };  
export default VariationData