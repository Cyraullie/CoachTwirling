import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

const AthleteData = () => {
  const navigate = useNavigate();
  const [athleteData, setAthleteData] = useState([]);
  const [isUpdatedMap, setIsUpdatedMap] = useState({}); // État pour suivre les modifications par athlète
  const [firstname, setFirstname] = useState(null);
  const [group1, setGroup1] = useState("vide");
  const [group2, setGroup2] = useState("vide");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(apiUrl + "athletes")
      .then((response) => {
        const initialIsUpdatedMap = {};
        response.data.forEach((element) => {
          initialIsUpdatedMap[element.id] = false; // Initialiser à false pour chaque athlète
        });
        setIsUpdatedMap(initialIsUpdatedMap);
        setAthleteData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFirstnameChange = (athleteId, firstname) => {
    const updatedMap = { ...isUpdatedMap, [athleteId]: true };
    setIsUpdatedMap(updatedMap);
    setFirstname(firstname);
  };

  const onGroup1Change = (athleteId, group1) => {
    const updatedMap = { ...isUpdatedMap, [athleteId]: true };
    setIsUpdatedMap(updatedMap);
    setGroup1(group1);
  };

  const onGroup2Change = (athleteId, group2) => {
    const updatedMap = { ...isUpdatedMap, [athleteId]: true };
    setIsUpdatedMap(updatedMap);
    setGroup2(group2);
  };

  const saveChanges = (athleteId) => {
    // Enregistrer les modifications de l'athlète avec l'ID spécifié
    const updatedMap = { ...isUpdatedMap, [athleteId]: false };
    setIsUpdatedMap(updatedMap);
    let payload = { firstname: firstname, group1: group1, group2: group2 };

    const onSuccess = () => {
      navigate("/athlete");
    };

    const onFailure = (error) => {
      console.log(error && error.response);
    };
    axios.post(apiUrl + "athlete/" + athleteId, payload ).then(onSuccess).catch(onFailure)
  };

  const onPressDelete = (athlete_id) => {
    const onSuccess = () => {
      window.location.reload();
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      
    };
    axios.delete(apiUrl + "del_athlete/" + athlete_id).then(onSuccess).catch(onFailure)
  }
  
  return (
    <>
      {athleteData.map((athlete) => (
        <div key={athlete.id} className="AthleteEdit">
          <input
            defaultValue={athlete.firstname}
            className="AthleteEditInput"
            onChange={(e) => onFirstnameChange(athlete.id, e.target.value)}
          ></input>
          <select
            className="AthleteEditSelect"
            defaultValue={athlete.group_athlete_id1}
            onChange={(event) =>
              onGroup1Change(athlete.id, event.target.value)
            }
          >
            <option value="aucun">aucun</option>
            <option value="1">Lundi</option>
            <option value="2">Jeudi</option>
            <option value="3">Vendredi 1</option>
            <option value="4">Vendredi 2</option>
            <option value="5">Samedi</option>
          </select>
          <select
            className="AthleteEditSelect"
            defaultValue={athlete.group_athlete_id2}
            onChange={(event) =>
              onGroup2Change(athlete.id, event.target.value)
            }
          >
            <option value="aucun">aucun</option>
            <option value="1">Lundi</option>
            <option value="2">Jeudi</option>
            <option value="3">Vendredi 1</option>
            <option value="4">Vendredi 2</option>
            <option value="5">Samedi</option>
          </select>
          <a onClick={() => isUpdatedMap[athlete.id] && saveChanges(athlete.id)}>
            <img
              className={isUpdatedMap[athlete.id] ? "icon_save" : "icon_save Disable"}
              src="./save.png"
            />
          </a>

          {sessionStorage.getItem("role") == 1 ? (
            <img
              className="icon_save selectable"
              onClick={() => onPressDelete(athlete.id)}
              src="./trash.png"
            />
          ) : (
            null
          )}
        </div>
      ))}
    </>
  );
};

export default AthleteData;
