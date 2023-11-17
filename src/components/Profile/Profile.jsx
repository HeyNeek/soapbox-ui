import PropTypes from "prop-types";
import supabase from "../../config/supabaseClient";
import { useState, useEffect } from "react";

import { Container, Col, Row } from "react-bootstrap";

import "../Profile/Profile.css";

const Profile = ({ name, picture, bio, location }) => {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //NOTE I DISABLED RLS SHOULD PROBABLY TURN THAT BACK ON WHEN I GET MORE SERIOUS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("users").select();

        if (error) {
          setErrorMessage(error.message);
          console.log(errorMessage);
        } else {
          setUserData(data);
          console.log("userData inside useEffect: ", data);
        }
      } catch (error) {
        setErrorMessage(error.message);
        console.log(errorMessage);
      }
    };

    fetchData();
  }, []);

  console.log("userData: ", userData);

  const exampleOfGameUserIsCompetingIn = [
    {
      game: "Overwatch 2",
      peakRank: "GM5",
      gamertag: "Neek#1663",
    },
    {
      game: "Valorant",
      peakRank: "Platinum 1",
      gamertag: "Neek#1997",
    },
    {
      game: "Counter-Strike 2",
      peakRank: "Gold Nova 2",
      gamertag: "SecondServing",
    },
    {
      game: "Street Fighter 6",
      peakRank: "Platinum 1",
      gamertag: "NikoNikoNeek",
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
              <ul className="game-ranks-list">
                {exampleOfGameUserIsCompetingIn.map((game) => {
                  return (
                    <li className="game-rank-list-item" key={game.gamertag}>
                      <div>{game.game}</div>
                      <div>Peak Rank: {game.peakRank}</div>
                      <div>In-Game ID: {game.gamertag}</div>
                    </li>
                  );
                })}
              </ul>
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
