import "./index.css";
import { useState } from "react";
const TweetItem = ({ tweet, setRetweetChoisePage }) => {
  const retweetPost = () => setRetweetChoisePage(true);
  const [isliked, setLike] = useState(false);

  return (
    <div className="TweetItem">
      <img src={tweet.pic} alt="image profile" className="pro-pic" />
      <div className="tweet">
        <div className="tweet__head">
          <h3>{tweet.name}</h3>
          <p> {tweet.tag} </p>
          <p>• 24h </p>
        </div>
        <div className="tweet__text">{tweet.body}</div>
        <div className="tweet__icons">
          <img
            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/256/external-comments-social-media-ui-tanah-basah-basic-outline-tanah-basah.png"
            alt="comment image"
          />
          <img
            src="https://img.icons8.com/external-bearicons-glyph-bearicons/256/external-Repost-social-media-bearicons-glyph-bearicons.png"
            alt="repost image"
            onClick={retweetPost}
          />
          <img
            src={
              isliked
                ? "https://img.icons8.com/color/256/hearts.png"
                : "https://img.icons8.com/material-outlined/256/filled-like.png"
            }
            alt="like image"
            onClick={() => setLike((prev) => !prev)}
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
