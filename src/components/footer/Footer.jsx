import "./index.css";
import { useState, useRef } from "react";

const Footer = ({ setPage }) => {
  const showPage = (page) => {
    setPage(page);
    setClick(page);
  };

  const [isClicked, setClick] = useState("home");

  const trendSearchbarRef = useRef(0);
  return (
    <div className="Footer">
      <img
        src="https://img.icons8.com/material/256/home-page.png"
        alt="home image"
        className={isClicked === "home" && "bold"}
        onClick={() => showPage("home")}
      />
      <img
        src="https://img.icons8.com/ios-glyphs/256/search--v2.png"
        alt="search image"
        ref={trendSearchbarRef}
        className={isClicked === "trend" && "bold"}
        onClick={() => {
          showPage("trends");

          trendSearchbarRef.current.parentNode.parentNode.childNodes[4].childNodes[0].childNodes[1].focus();
          //implementata funzione che al click dell'icona del search, oltre a cambiare scheda, imposta lo stato dell'input text di TrendsPage su focus.
        }}
      />
      <img
        src="https://img.icons8.com/pastel-glyph/256/appointment-reminders.png"
        alt="notify image"
        className={isClicked === "notify" && "bold"}
        onClick={() => showPage("notify")}
      />
      <img
        src="https://img.icons8.com/ios/256/message-read.png"
        alt="message image"
        className={isClicked === "message" && "bold"}
        onClick={() => showPage("message")}
      />
    </div>
  );
};

export default Footer;
