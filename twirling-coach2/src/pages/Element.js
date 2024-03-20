import ElementData from "../components/ElementData";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Element = () => {
  let { id } = useParams();
  const [technicName, setTechnicName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/group_elements/${id}`);
        setTechnicName(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Effect se déclenche à chaque changement d'ID

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

    return (
      <div className="TechnicContainer">
        <div className="Title">
          {technicName}
        </div>
        
        <div className="TechnicArea">
            <ElementData groupElementId={id}/>
        </div>
      </div>
      )
    };  
    export default Element;