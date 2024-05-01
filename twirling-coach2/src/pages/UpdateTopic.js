import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
const fileUrl = process.env.REACT_APP_FILE_URL;

const UpdateTopic = () => {
  let { topic_id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [topic, setTopic] = useState([]);

  const getData = () => {
    axios.get(apiUrl + "topicality/" + topic_id)
    .then((response) => {
      setTopic(response.data) 
    })
    .catch(error => {
    console.log(error);
    }); 

}

useEffect(() => {
    getData();
  }, []);

  const onImageChange = (image) => {
    setName(image.target.files[0].name.slice(0, -4))
    setImage(image.target.files[0]);
  }; 

  const onPressStore = () => {    
    let formData = new FormData();

    formData.append('name', name);
    formData.append('image', image); 
    
    const onSuccess = () => {
      navigate('/')
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.post(apiUrl + "topicality/" + topic_id, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(onSuccess).catch(onFailure)
  };  

  const onPressDelete = () => {
    const onSuccess = () => {
      navigate('/')
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.delete(apiUrl + "del_topicality/" + topic_id).then(onSuccess).catch(onFailure)
  }

    return ( 
      <div className="TechnicContainer">
        <div className="Title">
          <a>Mise à jour du Topic</a>
        </div>
        
        <div className="StoreArea">

          
          <label className="label">image actuelle</label>
          <img className="TopicImagePreview" src={fileUrl + "topicalities/" + topic.filepath}></img>
          <label className="label">image</label>
          <input type="file" className="text_input"></input>
          <input type="submit" className="submit" defaultValue={topic.filepath} onClick={onPressStore} value={"Mettre à jour"}></input>
          <input type="submit" className="delete" onClick={onPressDelete} value={"Supprimer"}></input>
        </div>
      </div>
      ) 
    };  
    export default UpdateTopic;