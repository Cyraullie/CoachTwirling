import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

const Login = ({auth}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (username) => {
      setUsername(username.target.value);
    };  
  
  const onPasswordChange = (password) => {
    setPassword(password.target.value);
  }; 


  const onPressStore = () => {
    let payload = {username: username, password: password};

    const onSuccess = (result) => {
      sessionStorage.setItem("user_id", result.data[0])
      sessionStorage.setItem("role", result.data[1])
      auth(true);
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.post(apiUrl + "verify", payload ).then(onSuccess).catch(onFailure)
  };  

  return (
    <>
    <div className="Login">
        <div className="LoginArea">
        <label className="label">nom d'utilisateur</label>
        <input defaultValue={username} className="text_input" onChange={onUsernameChange}></input>
        <label className="label">mot de passe</label>
        <input type="password" defaultValue={password} className="text_input" onChange={onPasswordChange}></input>
        <input type="submit" className="submit" onClick={onPressStore} value={"Se connecter"}></input>
      </div>
    </div>
    </>
    
  );
  
}

export default Login;