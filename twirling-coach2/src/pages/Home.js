import { Link } from "react-router-dom";
import TopicData from "../components/TopicData";

const Home = () => {
    return (
        <div className="TopicContainer">
          <div className="TopicArea">
            <TopicData />
            
            {sessionStorage.getItem("role") == 1 ? (
                <Link className="AddButton" to={{
                pathname: "/topic_new",
                }}>
                    <img src="./plus.png" />
                </Link>
            ) : (
                null
            )}
            </div>
        </div>
    );
  };
  
  export default Home;