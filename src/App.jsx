import "./App.css";
import Header from "./components/header";
import HomePage from "./components/homePage";
import Footer from "./components/footer";
import TweetPage from "./components/tweetPage";
import LeftSection from "./components/leftSection";
import TrendsPage from "./components/trendsPage";
import { useState } from "react";

function App() {
  const [leftSectionIsOpen, setLeftSection] = useState(false);
  const [addTweetIsOpen, setAddTweet] = useState(false);
  const [whichPageIsActive, setPage] = useState("home");
  //choose between home, trends, notify and message

  return (
    <div className="App">
      <Header setLeftSection={setLeftSection} />
      <HomePage setAddTweet={setAddTweet} className="HomePage" />
      <Footer setPage={setPage} />
      {leftSectionIsOpen && <leftSection />}
      {addTweetIsOpen && (
        <TweetPage className="TweetPage" setAddTweet={setAddTweet} />
      )}
      <LeftSection
        leftSectionIsOpen={leftSectionIsOpen}
        setLeftSection={setLeftSection}
      />
      {whichPageIsActive === "trends" ? <TrendsPage /> : null}
    </div>
  );
}

export default App;
