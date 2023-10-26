import PropTypes from "prop-types";
import "../Post/Post.css";

const Post = ({ title, content, author }) => {
  return (
    <div className="post">
      <h2 className="title">{title}</h2>
      <h4 className="author">By {author}</h4>
      <br />
      <p className="content">{content}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Post;
