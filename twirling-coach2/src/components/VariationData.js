import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VariationData = ({ groupElementId, levelId, elementId }) => {
    const [variationData, setVariationData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/group_elements/${groupElementId}/levels/${levelId}/elements/${elementId}/variations/`);
          console.log(response.data)
          setVariationData(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [levelId]); // Effect se déclenche à chaque changement d'ID
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }


  
    return (
      <>
          <a href={variationData[3].link}><img src="/film.png" className="iconFilm"></img></a>

          <div className="VariationContainer">
          { variationData[0].map((variation, index) => (
          <div className="VariationArea">
            <a className="VariationTitle">{variation.name.toUpperCase()}</a>

            { variationData[2].map((groupAthlete, index) => (
              <div className="GroupAthleteArea">
              <a className="GroupAthleteTitle">{groupAthlete.name.toUpperCase()}</a>

              { variationData[1].map((athlete, index) => (
                (athlete.group_athlete_id1 == groupAthlete.id || athlete.group_athlete_id2 == groupAthlete.id ) ?
                  <div>
                  {athlete.firstname}
                  </div>
                  : 
                  null
               ))}
              </div>
            ))}
          </div>
          ))}
        </div>
       

        
      </>
      )
    };  
export default VariationData