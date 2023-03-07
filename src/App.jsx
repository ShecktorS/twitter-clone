import "./App.css";
import Header from "./components/header";
import HomePage from "./components/homePage";
import Footer from "./components/footer";
import TweetPage from "./components/tweetPage";
import LeftSection from "./components/leftSection";
import { useState } from "react";

function App() {
  const [leftSectionIsOpen, setLeftSection] = useState(false);
  const [addTweetIsOpen, setAddTweet] = useState(false);
  return (
    <div className="App">
      <Header setLeftSection={setLeftSection} />
      <HomePage setAddTweet={setAddTweet} className="HomePage" />
      <Footer />
      {leftSectionIsOpen && <leftSection />}
      {addTweetIsOpen && (
        <TweetPage className="TweetPage" setAddTweet={setAddTweet} />
      )}
      <LeftSection
        leftSectionIsOpen={leftSectionIsOpen}
        setLeftSection={setLeftSection}
      />
    </div>
  );
}

export default App;
