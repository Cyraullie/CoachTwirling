import { Link } from "react-router-dom";

const Athlete = () => {
    return (
      <div className="body">
        <h1>Athlètes</h1>;
        <Link className="AddButton" to={{
                pathname: "/athlete_new",
            }}>
                <img src="/plus.png" />
            </Link>
      </div>
      )
    };  
    export default Athlete;