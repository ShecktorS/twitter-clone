import "./index.css";
import { BsThreeDots } from "react-icons/bs";

const TrendItem = ({ item }) => {
  return (
    <div className="TrendItem">
      <div className="trendContent">
        <p className="country-trend">Di tendenza nella seguente zona: Italia</p>
        <h5>{item.title}</h5>
        <p>#{item.tags.join(" #")}</p>
      </div>
      <BsThreeDots className="other" />
    </div>
  );
};

export default TrendItem;
