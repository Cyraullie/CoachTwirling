import GroupElementData from "../components/GroupElementData";
import { Link } from "react-router-dom";

const Technic = () => {
    return (
      <div className="TechnicContainer">
        <div className="TechnicArea">
            <GroupElementData />
          <Link className="AddButton" to={{
                pathname: "/technic_new",
            }}>
                <img src="/plus.png" />
            </Link>
        </div>
      </div>
      )
    };  
    export default Technic;