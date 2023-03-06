import tweets from "../../mocks/tweets.js";
import "./index.css";

const TweetItem = () => {
  return (
    <div className="TweetItem">
      <img src={tweets[0].pic} alt="" className="pro-pic" />
      <div className="tweet">
        <div className="tweet__head">
          <h3>{tweets[1].name}</h3>
          <p> {tweets[1].tag} </p>
          <p>• 24h </p>
        </div>
        <div className="tweet__text">{tweets[1].body}</div>
        <div className="tweet__icons">
          <img src="" alt=""></img>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TweetItem;
