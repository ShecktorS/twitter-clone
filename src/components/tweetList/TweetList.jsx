import "./index.css";
import tweets from "../../mocks/tweets";
import TweetItem from "../tweetItem";

const TweetList = ({ setRetweetChoisePage }) => {
  return (
    <div className="TweetList">
      {tweets.map((tweet) => (
        <TweetItem
          tweet={tweet}
          key={tweet.id}
          setRetweetChoisePage={setRetweetChoisePage}
        />
      ))}
    </div>
  );
};

export default TweetList;
