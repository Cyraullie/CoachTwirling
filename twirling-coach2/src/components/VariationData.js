import axios from "axios";
import React, { useState, useEffect } from "react";

const VariationData = ({ groupElementId, levelId, elementId }) => {
  const [variationData, setVariationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpenState, setIsOpenState] = useState([]);
  const [isGroupOpenState, setIsGroupOpenState] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/group_elements/${groupElementId}/levels/${levelId}/elements/${elementId}/variations/`);
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

  const handleStateElementChange = (newValue, athleteId, variationId) => {
    let payload = {variation_id: variationId, athlete_id: athleteId, state: newValue}
    axios.post("http://localhost:8000/api/state_element/" , payload)
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

  return (
    <>
      <a href={variationData[3].link}><img src="/film.png" className="iconFilm" alt="film icon" /></a>
      <div className="VariationContainer">
        {variationData[0].map((variation, index) => (
          <div className="VariationArea" key={index}>
            <a className="VariationTitle no-select" onClick={() => toggleOpenState(index)}>{variation.name.toUpperCase()}</a>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default VariationData;
