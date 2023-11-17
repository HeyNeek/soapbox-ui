import PropTypes from "prop-types";
import supabase from "../../config/supabaseClient";
import { useState, useEffect } from "react";

import { Container, Col, Row } from "react-bootstrap";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Profile/Profile.css";

const Profile = () => {
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
            {userData ? (
              <img className="profile-pic" src={userData[0].profile_pic} />
            ) : (
              <p className="profile-pic">Loading...</p>
            )}
            <div className="name-and-verified-container">
              {userData ? (
                <h1 className="profile-name">{userData[0].user_name}</h1>
              ) : (
                <p className="profile-name">Loading...</p>
              )}
              {userData && userData[0].verified ? (
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="checkmark-icon"
                />
              ) : (
                <p>Loading...</p>
              )}
            </div>
            {userData ? (
              <p className="profile-location">{userData[0].location}</p>
            ) : (
              <p className="profile-location">Loading...</p>
            )}
            {userData ? (
              <p className="profile-bio">{userData[0].bio}</p>
            ) : (
              <p className="profile-bio">Loading...</p>
            )}
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
