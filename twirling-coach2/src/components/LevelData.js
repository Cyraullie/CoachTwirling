import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

const LevelData = ({ groupElementId }) => {
  const navigate = useNavigate();
    const [levelData, setLevelData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl + `group_elements/${groupElementId}/levels`);
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

    const onPressEdit = (level_id) => {
      navigate('/level_update/' + level_id)
    };
  
    return (
      <>
      
        { levelData.map((element, index) => (
          <div className="AdminArea">
            <Link key={index} className="TechnicButton" to={{
                pathname: "/technic/" + groupElementId + "/level/" + element.id,
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
export default LevelData