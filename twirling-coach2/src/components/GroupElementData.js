import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

const GroupElementData = () => {
  const navigate = useNavigate();
    const [groupElementData, setGroupElementData] = useState([]);


    const getData = () => {
        axios.get(apiUrl + "group_elements")
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

      const onPressEdit = (id) => {
        navigate('/technic_update/' + id)
      };

    return (
      <>
        { groupElementData.map((element, index) => (
          <div className="AdminArea">
            <Link key={index} className="TechnicButton" to={{
                pathname: "/technic/" + element.id,
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
    export default GroupElementData;