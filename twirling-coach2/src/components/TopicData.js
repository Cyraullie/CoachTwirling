import axios from "axios";
import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;
const fileUrl = process.env.REACT_APP_FILE_URL;

const TopicData = () => {
  const navigate = useNavigate();
    const [topicData, setTopicData] = useState([]);


    const getData = () => {
        axios.get(apiUrl + "topicalities")
        .then((response) => {
          setTopicData(response.data) 
        })
        .catch(error => {
        console.log(error);
        }); 
    
    }

    useEffect(() => {
        getData();
      }, []);

    const handleClick = (id) => {
      navigate('/topic_update/' + id)
    };
  
    return (
      <>
        { topicData.map((topic, index) => (
          sessionStorage.getItem("role") == 1 ? (
            <img className="TopicImages selectable" onClick={() => handleClick(topic.id)} key={index} src={fileUrl + "topicalities/" + topic.filepath}></img>
          ) : (
            <img className="TopicImages" key={index} src={fileUrl + "topicalities/" + topic.filepath}></img>
          )
            
            
        ))}
      </>
      )
    };  
    export default TopicData;