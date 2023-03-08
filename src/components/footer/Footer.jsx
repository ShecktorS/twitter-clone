import "./index.css";

const Footer = ({ setPage }) => {
  const showPage = (page) => setPage(page);
  return (
    <div className="Footer">
      <img
        src="https://img.icons8.com/material/256/home-page.png"
        alt="home image"
        onClick={() => showPage("home")}
      />
      <img
        src="https://img.icons8.com/ios-glyphs/256/search--v2.png"
        alt="search image"
        onClick={() => showPage("trends")}
      />
      <img
        src="https://img.icons8.com/pastel-glyph/256/appointment-reminders.png"
        alt="notify image"
      />
      <img
        src="https://img.icons8.com/ios/256/message-read.png"
        alt="message image"
      />
    </div>
  );
};

export default Footer;
