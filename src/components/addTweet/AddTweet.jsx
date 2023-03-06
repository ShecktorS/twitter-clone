import "./index.css";

const AddTweet = ({ setAddTweet }) => {
  return (
    <div className="AddTweet" onClick={() => setAddTweet((prev) => !prev)}>
      +
    </div>
  );
};

export default AddTweet;
