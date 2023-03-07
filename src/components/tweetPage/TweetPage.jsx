import "./index.css";
import { BiMicrophone } from "react-icons/bi";
import { FiImage } from "react-icons/fi";
import { AiOutlineGif } from "react-icons/ai";
import { GiFeather } from "react-icons/gi";

const TweetPage = () => {
  return (
    <div className="TweetPage">
      <div className="overlay"></div>
      <div className="tweet-options">
        <div className="spaces">
          <p>Spazi</p>
          <BiMicrophone />
        </div>
        <div className="photos">
          <p>Foto</p>
          <FiImage />
        </div>
        <div className="gif">
          <p>GIF</p>
          <AiOutlineGif />
        </div>
        <div className="tweet">
          <p>Tweet</p>
          <GiFeather />
        </div>
      </div>
    </div>
  );
};

export default TweetPage;
