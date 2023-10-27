import Post from "../Post/Post";
import "../Homepage/Homepage.css";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Homepage = () => {
  const postArray = [];

  for (let i = 0; i < 100; i++) {
    postArray.push({
      title: "Example Overwatch Post",
      content:
        "Example post in which I explain why low skill heroes in Overwatch should not be fucking meta ever in any circumstance. First off let's use three prime examples in the game. Orisa, Junkrat, and Mercy. These characters are basically a lot of people's introduction to Overwatch when they first pick up the game. They require little to no mechanical skill, and have the lowest skill ceiling in the game. Why on God's green Earth would you want a character a fucking nimrod could play be the best character in the game? Not only will it make the game extremely boring because everyone is gonna get their rank boosted, but also deincentivizes people not to play high skill heroes like Tracer or Ana. ",
      author: "Example User",
    });
  }

  return (
    <div className="homepage">
      <Col>
        <h1 className="homepage-header">Latest posts</h1>
        {postArray.map((post) => {
          return (
            <Post
              title={post.title}
              author={post.author}
              content={post.content}
              key={post.title}
            />
          );
        })}
      </Col>
    </div>
  );
};

export default Homepage;
