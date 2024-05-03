import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const UpdateTechnic = () => {
  let { variation_id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [technic, setTechnic] = useState([]);

  const getData = () => {
    axios.get(apiUrl + "variations/" + variation_id)
    .then((response) => {
      setTechnic(response.data)
    })
    .catch(error => {
    console.log(error);
    }); 

}

useEffect(() => {
    getData();
  }, []);

  const onNameChange = (input) => {
    setName(input.target.value)
  }; 

  const onPressStore = () => {    
    let formData = new FormData();

    formData.append('name', name);
    
    const onSuccess = () => {
      navigate('/technic')
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.post(apiUrl + "variation/" + variation_id, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(onSuccess).catch(onFailure)
  };  

  const onPressDelete = () => {
    const onSuccess = () => {
      navigate('/technic')
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.delete(apiUrl + "del_variation/" + variation_id).then(onSuccess).catch(onFailure)
  }

    return ( 
      <div className="TechnicContainer">
        <div className="Title">
          <a>Mise à jour de la technique</a>
        </div>
        
        <div className="StoreArea">
          <label className="label">nom</label>
          <input className="text_input" defaultValue={technic} onChange={onNameChange}></input>
          <input type="submit" className="submit" onClick={onPressStore} value={"Mettre à jour"}></input>
          <input type="submit" className="delete" onClick={onPressDelete} value={"Supprimer"}></input>
        </div>
      </div>
      ) 
    };  
    export default UpdateTechnic;