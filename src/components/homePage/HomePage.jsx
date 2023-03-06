import "./index.css";
import TweetList from "../tweetList";
import AddTweet from "../addTweet/AddTweet";

const HomePage = ({ setAddTweet }) => {
  return (
    <div className="HomePage">
      <TweetList />
      <AddTweet setAddTweet={setAddTweet} />
    </div>
  );
};

export default HomePage;
