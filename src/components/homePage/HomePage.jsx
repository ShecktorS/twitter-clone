import "./index.css";
import TweetList from "../tweetList";
import AddTweet from "../addTweet/AddTweet";

const HomePage = () => {
  return (
    <div className="HomePage">
      <TweetList />
      <AddTweet />
    </div>
  );
};

export default HomePage;
