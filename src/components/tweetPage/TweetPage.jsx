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
          <div>
            <BiMicrophone />
          </div>
        </div>
        <div className="photos">
          <p>Foto</p>
          <div>
            <FiImage />
          </div>
        </div>
        <div className="gif">
          <p>GIF</p>
          <div>
            <AiOutlineGif />
          </div>
        </div>
        <div className="tweet">
          <p>Tweet</p>
          <div>
            <GiFeather className="tweet__svg" />
            <p className="add-icon">⁺</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetPage;
