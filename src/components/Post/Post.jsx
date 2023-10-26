import PropTypes from "prop-types";
import "../Post/Post.css";

import Card from "react-bootstrap/Card";

const Post = ({ title, content, author }) => {
  return (
    <Card
      style={{
        width: "100%",
        marginBottom: "10px",
        backgroundColor: "#c5c6c7",
      }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle
          className="mb-2 text-muted"
          style={{ cursor: "pointer" }}
        >
          By {author}
        </Card.Subtitle>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Post;
