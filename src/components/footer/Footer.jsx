import "./index.css";
import { useState, useRef } from "react";
import { MdHome } from "react-icons/md";

import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Footer = ({ setPage }) => {
  const showPage = (page) => {
    setPage(page);
    setClick(page);
  };

  const [isClicked, setClick] = useState("home");

  // const trendSearchbarRef = useRef(0);
  return (
    <div className="Footer">
      <MdHome
        alt="home image"
        className={isClicked === "home" && "bold"}
        onClick={() => showPage("home")}
      />
      <IoSearchOutline
        alt="search image"
        // ref={trendSearchbarRef}
        className={isClicked === "trends" && "bold"}
        onClick={() => {
          showPage("trends");

          // trendSearchbarRef.current.parentNode.parentNode.childNodes[4].childNodes[0].childNodes[1].focus(); //per lo useRef()
          //implementata funzione che al click dell'icona del search, oltre a cambiare scheda, imposta lo stato dell'input text di TrendsPage su focus.
        }}
      />
      <IoNotificationsOutline
        alt="notify image"
        className={isClicked === "notify" && "bold"}
        onClick={() => showPage("notify")}
      />
      <AiOutlineMail
        alt="message image"
        className={isClicked === "message" && "bold"}
        onClick={() => showPage("message")}
      />
    </div>
  );
};

export default Footer;
