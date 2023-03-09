import "./index.css";
import tweets from "../../mocks/tweets";
import TweetItem from "../tweetItem";

const TweetList = () => {
  return (
    <div className="TweetList">
      {tweets.map((tweet) => (
        <TweetItem tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
};

export default TweetList;
