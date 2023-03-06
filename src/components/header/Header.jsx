import "./index.css";

const Header = ({ setLeftSection }) => {
  return (
    <div className="Header">
      <div className="Header__top">
        <img
          src="https://robohash.org/giacomino"
          alt="profile pic"
          onClick={() => setLeftSection((prev) => !prev)}
        />
        <img
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="twitter pic"
        />
      </div>
      <div className="Header__bottom">
        <h3>Per te</h3>
        <h3>Seguiti</h3>
        <h3>Politica e attualità</h3>
        <h3>Palermo</h3>
      </div>
    </div>
  );
};

export default Header;
