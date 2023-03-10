import "./index.css";
import TweetList from "../tweetList";
import AddTweet from "../addTweet/AddTweet";

const HomePage = ({ setAddTweet, setRetweetChoisePage }) => {
  return (
    <div className="HomePage">
      <TweetList setRetweetChoisePage={setRetweetChoisePage} />
      <AddTweet setAddTweet={setAddTweet} />
    </div>
  );
};

export default HomePage;
