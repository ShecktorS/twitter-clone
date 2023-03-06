import "./App.css";
import Header from "./components/header";
import HomePage from "./components/homePage";
import AddTweet from "./components/addTweet";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <AddTweet />
      <Footer />
    </div>
  );
}

export default App;
