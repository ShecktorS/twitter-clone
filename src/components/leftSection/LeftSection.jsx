import "./index.css";
import twitter from "../../assets/img/twitter.png";
import { CgProfile } from "react-icons/cg";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";

const LeftSection = ({ leftSectionIsOpen, setLeftSection }) => {
  return (
    <div className={`LeftSection ${leftSectionIsOpen && "show"}`}>
      <div
        className={`overlay ${leftSectionIsOpen && "show-overlay"}`}
        onClick={() => setLeftSection((prev) => !prev)}
      ></div>
      <div className="content">
        <div className="top-section">
          <div className="info-profile">
            <div className="pro-pic">
              <img src="https://robohash.org/giacomino" alt="profile pic" />
            </div>
            <div className="name-and-user">
              <h4>Paolo Filottete</h4>
              <p>@paolo-fil</p>
            </div>
            <div className="following">
              <p>
                <span>334</span> Following
              </p>
              <p>
                <span>99</span> Follower
              </p>
            </div>
          </div>
          <div className="settings">
            <div className="circle">
              <p>...</p>
            </div>
          </div>
        </div>
        <div className="mid-section">
          <ul>
            <li>
              <h3>
                <CgProfile className="mid-section__icons" />
                Profilo
              </h3>
              {/* Inserire all'interno dell'H3 o della li l'icona! */}
            </li>
            <li>
              <div className="twitter-blue ">
                <img src={twitter} alt="twitter_blue" />
              </div>
              <h3 className="twitter-blue-text">Twitter Blue</h3>{" "}
              {/* Inserire all'interno dell'H3 o della li l'icona! */}
            </li>
            <li>
              <h3>
                {" "}
                <BiMessageRoundedDetail className="mid-section__icons" />{" "}
                Argomenti
              </h3>{" "}
              {/* Inserire all'interno dell'H3 o della li l'icona! */}
            </li>
            <li>
              <h3>
                {" "}
                <BsBookmark className="mid-section__icons" /> Segnalibri
              </h3>{" "}
              {/* Inserire all'interno dell'H3 o della li l'icona! */}
            </li>
            <li>
              <h3>
                {" "}
                <RiFileList2Line className="mid-section__icons" /> Liste
              </h3>{" "}
              {/* Inserire all'interno dell'H3 o della li l'icona! (Eventualmente all'interno dell'H3 fare uno span) */}
            </li>
            <li>
              <h3>
                <CgProfile className="mid-section__icons mid-section__icons--circle" />
                Twitter Circle
              </h3>{" "}
              {/* Inserire all'interno dell'H3 o della li l'icona! */}
            </li>
          </ul>
        </div>
        <div className="bottom-section">
          <div className="tools">
            <h4>Strumenti per professionisti</h4>
          </div>
          <div className="support">
            <h4>Impostazioni e assistenza</h4>
          </div>
        </div>
      </div>
      {/* <NightButton /> */}
    </div>
  );
};

export default LeftSection;
