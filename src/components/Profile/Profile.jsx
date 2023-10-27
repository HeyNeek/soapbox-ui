import PropTypes from "prop-types";

import { Container, Col } from "react-bootstrap";

import "../Profile/Profile.css";

const Profile = ({ name, picture, bio, location }) => {
  return (
    <div className="profile">
      <Container>
        <Col className="profile-column">
          <img className="profile-pic" src={picture} />
          <h1 className="profile-name">{name}</h1>
          <p className="profile-location">{location}</p>
          <p className="profile-bio">{bio}</p>
        </Col>
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
