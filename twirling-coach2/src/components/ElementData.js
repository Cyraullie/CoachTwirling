import axios from "axios";
import React, { useState, useEffect } from "react";

const ElementData = ({ groupElementId }) => {
    const [elementData, setElementData] = useState([]);
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

    const getData = () => {
        axios.get(`http://localhost:8000/api/group_elements/${groupElementId}/levels`)
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
            <a className="TechnicButton" href={"technic/" + groupElementId + "/level/" + element.id}>
                {element.name.toUpperCase()}
            </a>
        ))}
      </>
      )
    };  
export default ElementData