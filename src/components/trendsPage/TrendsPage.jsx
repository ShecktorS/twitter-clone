import "./index.css";
import { FiSettings } from "react-icons/fi";

const TrendsPage = () => {
  return (
    <div className="TrendsPage">
      <div className="TrendsPage__header">
        <img src="https://robohash.org/giacomino" alt="profile pic" />
        <input
          type="text"
          className="search-on-twitter"
          placeholder="Cerca su Twitter"
        />
        <FiSettings className="FiSettings" />
      </div>
      <div className="TrendsPage__content">
        <h4>Tendenze per te</h4>
        <div className="trends-list">{/* <TrendsItem /> */}</div>
      </div>
    </div>
  );
};

export default TrendsPage;
