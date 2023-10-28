import PropTypes from "prop-types";

import { Container, Col, Row } from "react-bootstrap";

import "../Profile/Profile.css";

const Profile = ({ name, picture, bio, location }) => {
  const exampleOfGameUserIsCompetingIn = [
    {
      game: "Overwatch 2",
      peakRank: "GM5",
      gamertag: "Neek#1663",
    },
    {
      game: "Valorant",
      peakRank: "Diamond 1",
      gamertag: "Neek#1997",
    },
  ];

  return (
    <div className="profile">
      <Container>
        <Row>
          <Col className="profile-column">
            <img className="profile-pic" src={picture} />
            <h1 className="profile-name">{name}</h1>
            <p className="profile-location">{location}</p>
            <p className="profile-bio">{bio}</p>
          </Col>
          <Col>
            <Row>
              <h1 className="your-ranks-header">Your Ranks</h1>
              <Container>
                <ul>
                  {exampleOfGameUserIsCompetingIn.map((game) => {
                    return (
                      <li key={game.gamertag}>
                        <div>{game.game}</div>
                        <div>Peak Rank: {game.peakRank}</div>
                        <div>In-Game ID: {game.gamertag}</div>
                      </li>
                    );
                  })}
                </ul>
              </Container>
            </Row>
            <Row>
              <h1 className="your-posts-header">Your Posts</h1>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
};

export default Profile;
