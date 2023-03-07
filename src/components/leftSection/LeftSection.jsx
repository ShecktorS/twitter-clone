import "./index.css";

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
            <div className="pro-pic"></div>
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
            <div className="circle">...</div>
          </div>
        </div>
        <div className="mid-section">
          <ul>
            <li>
              <h3>Profilo</h3>{" "}
              {/* Inserire all'interno dell'H3 o della li l'icona! */}
            </li>
            <li>
              <h3>Twitter Blue</h3>{" "}
              {/* Inserire all'interno dell'H3 o della li l'icona! */}
            </li>
            <li>
              <h3>Argomenti</h3>{" "}
              {/* Inserire all'interno dell'H3 o della li l'icona! */}
            </li>
            <li>
              <h3>Segnalibri</h3>{" "}
              {/* Inserire all'interno dell'H3 o della li l'icona! */}
            </li>
            <li>
              <h3>Liste</h3>{" "}
              {/* Inserire all'interno dell'H3 o della li l'icona! (Eventualmente all'interno dell'H3 fare uno span) */}
            </li>
            <li>
              <h3>Twitter Circle</h3>{" "}
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
