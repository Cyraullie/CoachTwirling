import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;
const fileUrl = process.env.REACT_APP_FILE_URL;

const TopicData = () => {
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

  
    return (
      <>
        { topicData.map((topic, index) => (
            <img className="TopicImages" src={fileUrl + "topicalities/" + topic.filepath}></img>
        ))}
      </>
      )
    };  
    export default TopicData;