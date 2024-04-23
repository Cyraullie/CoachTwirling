import { Link } from "react-router-dom";
import DataAthleteView from "../components/AthleteData";

const Athlete = () => {
    return (
      <div className="AthleteContainer">
        <h1>Athlètes</h1>
        <div className="AthleteEditArea">
        <DataAthleteView/>
        </div>
        <Link className="AddButton" to={{
                pathname: "/athlete_new",
            }}>
                <img src="./plus.png" />
            </Link>
      </div>
      )
    };  
    export default Athlete;