import "./index.css";
import { FiSettings } from "react-icons/fi";
import TrendItem from "../trendItem";
import { useState, useEffect } from "react";

const TrendsPage = () => {
  const [trend, getTrends] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(({ posts }) => getTrends(posts));
  }, []);

  const filteredList = (list) =>
    list.filter((item) => item.body.includes(inputValue));
  return (
    <div className="TrendsPage">
      <div className="TrendsPage__header">
        <img src="https://robohash.org/giacomino" alt="profile pic" />
        <input
          type="text"
          className="search-on-twitter"
          placeholder="Cerca su Twitter"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <FiSettings className="FiSettings" />
      </div>
      <div className="TrendsPage__content">
        <h4>Tendenze per te</h4>
        {filteredList(trend).map((item) => (
          <TrendItem item={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default TrendsPage;
