import { Link } from "react-router-dom";
import DataAthleteView from "../components/AthleteData";

const Athlete = () => {
    return (
      <div className="AthleteContainer">
        <h1>Athlètes</h1>
        <div className="AthleteEditArea">
        <DataAthleteView/>
        </div>

        {sessionStorage.getItem("role") == 1 ? (
            <Link className="AddButton" to={{
              pathname: "/athlete_new",
          }}>
              <img src="./plus.png" />
          </Link>
          ) : (
            null
          )}
        
      </div>
      )
    };  
    export default Athlete;