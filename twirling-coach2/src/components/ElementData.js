import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

const ElementData = ({ groupElementId, levelId }) => {
  const navigate = useNavigate();
  const [elementData, setElementData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl + `group_elements/${groupElementId}/levels/${levelId}/elements`);
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
  
    const onPressEdit = (element_id) => {
      navigate('/element_update/' + element_id)
    };
  

    return (
      <>
      
        { elementData.map((element, index) => (
          
          <div className="AdminArea">
            <Link key={index} className="ElementButton" to={{
              pathname: "/technic/" + groupElementId + "/level/" + levelId + "/variation/"+ element.id,
          }}>
              {element.name.toUpperCase()}
          </Link>
          {sessionStorage.getItem("role") == 1 ? (
            <img
              className="icon_edit selectable"
              onClick={() => onPressEdit(element.id)}
              src="./edit.png"
            />
          ) : (
            null
          )}
          </div>
        ))}
      </>
      )
    };  
export default ElementData