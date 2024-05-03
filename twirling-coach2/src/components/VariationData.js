import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

const VariationData = ({ groupElementId, levelId, elementId }) => {
  const navigate = useNavigate();
  const [variationData, setVariationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpenState, setIsOpenState] = useState([]);
  const [isGroupOpenState, setIsGroupOpenState] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  let [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl + `group_elements/${groupElementId}/levels/${levelId}/elements/${elementId}/variations`);
        setVariationData(response.data);
        setIsOpenState(Array(response.data[0].length).fill(false)); // Initialiser l'état pour chaque VariationTitle
        setIsGroupOpenState(Array(response.data[2].length).fill(false)); // Initialiser l'état pour chaque GroupAthleteTitle
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [groupElementId, levelId, elementId]);

  const toggleOpenState = (index) => {
    const newIsOpenState = [...isOpenState];
    newIsOpenState[index] = !newIsOpenState[index];
    setIsOpenState(newIsOpenState);
  };

  const toggleGroupOpenState = (index) => {
    const newIsGroupOpenState = [...isGroupOpenState];
    newIsGroupOpenState[index] = !newIsGroupOpenState[index];
    setIsGroupOpenState(newIsGroupOpenState);
  };

  /*const handleClickHold = () => {
    setIsMouseDown = true;
    setTimeout(function() {
        if (isMouseDown) {
            // L'utilisateur a maintenu le clic enfoncé
            console.log("L'utilisateur a maintenu le clic enfoncé !");
        }
    }, 200);
  }

  const handleClickNotHold = () => {
    setIsMouseDown = false;
  }*/

  const handleStateElementChange = (newValue, athleteId, variationId) => {
    let payload = {variation_id: variationId, athlete_id: athleteId, state: newValue}
    axios.post(apiUrl + "state_element" , payload)
      .then((response) => {
        setSelectedOptions({
          ...selectedOptions,
          [`${athleteId}-${variationId}`]: newValue
        });
      })
    .catch(error => {
      console.log(error.response.request._response);
    });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const onPressEdit = (variation_id) => {
    navigate('/variation_update/' + variation_id)
  };

  return (
    <>
      <a href={variationData[3].link}><img src="/film.png" className="iconFilm" alt="film icon" /></a>
      <div className="VariationContainer">
        {variationData[0].map((variation, index) => (
          <div className="VariationArea" key={index}>
            <a className="VariationTitle no-select" onClick={() => toggleOpenState(index)} /*onMouseDown={() => handleClickHold(index)} onMouseUp={() => handleClickNotHold(index)}*/>{variation.name.toUpperCase()}</a>
            {isOpenState[index] && variationData[2].map((groupAthlete, groupIndex) => (
              <div className="GroupAthleteArea" key={groupIndex}>
                <a className="GroupAthleteTitle no-select" onClick={() => toggleGroupOpenState(groupIndex)}>{groupAthlete.name.toUpperCase()}</a>
                {isGroupOpenState[groupIndex] && variationData[1].map((athlete, athleteIndex) => {
                  if (athlete.group_athlete_id1 === groupAthlete.id || athlete.group_athlete_id2 === groupAthlete.id) {
                    let result = athlete.state_elements.find(stateVariation => stateVariation.variation_id === variation.id);
                    return (
                      <div className="AthleteArea" key={athleteIndex}>
                        <a>{athlete.firstname}</a>
                        <div className="StateArea">
                          <a className={`Sticker ${selectedOptions[`${athlete.id}-${variation.id}`] || (result !== undefined ? result.state : "PC")}`} />
                          
                          <select 
                          className="StateSelect"
                          defaultValue={result !== undefined ? result.state : "PC"}
                          onChange={(event) => handleStateElementChange(event.target.value, athlete.id, variation.id)
                        }>
                          <option value="PC">Pas commencé</option>
                          <option value="C">Commencé</option>
                          <option value="R">Réussi</option>
                          <option value="V">Validé</option>
                        </select>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            ))}
            {sessionStorage.getItem("role") == 1 ? (
            <img
              className="icon_edit selectable"
              onClick={() => onPressEdit(variation.id)}
              src="./edit.png"
            />
          ) : (
            null
          )}
          </div>
        ))}
      </div>
    </>
  );
};

export default VariationData;
