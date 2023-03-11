import "./index.css";
import { BsFillPenFill } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";

const RetweetChoisePage = ({
  setRetweetChoisePage,
  retweetChoisePageIsOpen,
}) => {
  const hideRetweetChoise = () => setRetweetChoisePage(false);
  return (
    <div className="RetweetChoisePage">
      <div className="RetweetChoise__overlay" onClick={hideRetweetChoise}></div>
      <div
        className={`RetweetChoise__content ${
          !retweetChoisePageIsOpen && "slowlyShow"
        }`}
      >
        {/* TODO: Sostituisci al montaggio del componente una classe che imposti visbility e z-index a 5 su APP */}
        <div className="swipeBar"></div>
        <div className="retweetChoise">
          <FaRetweet className="retweetIcon" />
          <p>Ritwitta</p>
        </div>
        <div className="citeChoise">
          <BsFillPenFill />
          <p>Cita il Tweet</p>
        </div>
      </div>
    </div>
  );
};

export default RetweetChoisePage;
