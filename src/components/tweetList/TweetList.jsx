import "./index.css";
import tweets from "../../mocks/tweets";
import TweetItem from "../tweetItem";

const TweetList = () => {
  return (
    <div className="TweetList" onScroll={() => console.log("pippo")}>
      {tweets.map((tweet) => (
        <TweetItem tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
};

export default TweetList;
