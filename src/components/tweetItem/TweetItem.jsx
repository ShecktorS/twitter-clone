import tweets from "../../mocks/tweets.js";
import "./index.css";

const TweetItem = () => {
  return (
    <div className="TweetItem">
      <img src={tweets[0].pic} alt="" className="pro-pic" />
      <div className="tweet">
        <div className="tweet__head">
          <h3>{tweets[1].name}</h3>
          <p> {tweets[1].tag} </p>
          <p>• 24h </p>
        </div>
        <div className="tweet__text">{tweets[1].body}</div>
        <div className="tweet__icons">
          <img
            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/256/external-comments-social-media-ui-tanah-basah-basic-outline-tanah-basah.png"
            alt="comment image"
          ></img>
          <img
            src="https://img.icons8.com/external-bearicons-glyph-bearicons/256/external-Repost-social-media-bearicons-glyph-bearicons.png"
            alt="repost image"
          />
          <img
            src="https://img.icons8.com/material-outlined/256/filled-like.png"
            alt="like image"
          />
          <img
            src="https://img.icons8.com/ios-glyphs/256/bar-chart.png"
            alt="analytics image"
          />
          <img
            src="https://img.icons8.com/material-outlined/256/share.png"
            alt="shared image"
          />
        </div>
      </div>
    </div>
  );
};

export default TweetItem;
