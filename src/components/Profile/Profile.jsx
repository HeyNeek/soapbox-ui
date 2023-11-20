import PropTypes from "prop-types";
import supabase from "../../config/supabaseClient";
import { useState, useEffect } from "react";

import { Container, Col, Row } from "react-bootstrap";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Profile/Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userGameData, setUserGameData] = useState(null);
  const [gameTitleArray, setGameTitleArray] = useState([]);
  const [hasGameTitleBeenCalledOnce, setHasGameTitleBeenCalledOnce] =
    useState(false);
  const [errorGettingUserMessage, setErrorGettingUserMessage] = useState(null);
  const [errorGettingGamesMessage, setErrorGettingGamesMessage] =
    useState(null);

  //NOTE I DISABLED RLS SHOULD PROBABLY TURN THAT BACK ON WHEN I GET MORE SERIOUS
  //first GET call gets the userData from the database
  //dont hardcode the user later, right now its just fetching all users but we dont want that.
  //probably want to query by username or user id later
  const fetchUserData = async () => {
    try {
      const { data, error } = await supabase.from("users").select();

      if (error) {
        setErrorGettingUserMessage(error.message);
        console.log(errorGettingUserMessage);
      } else {
        setUserData(data);
        console.log("userData inside useEffect: ", data);
      }
    } catch (error) {
      setErrorGettingUserMessage(error.message);
      console.log(errorGettingUserMessage);
    }
  };

  //this function call gets all the games that belong to a user, pretty awesome. dont think this needs to be changed
  //later...
  const fetchUserGameData = async () => {
    try {
      const { data, error } = await supabase
        .from("users_games")
        .select("*")
        .eq("user_id", userData[0].id);

      if (error) {
        setErrorGettingGamesMessage(error.message);
        console.log(errorGettingGamesMessage);
      } else {
        setUserGameData(data);
        console.log("userGameData inside useEffect: ", data);
      }
    } catch (error) {
      setErrorGettingGamesMessage(error.message);
      console.log(errorGettingGamesMessage);
    }
  };

  /*what this function call does it takes the userGameData variable and it iterates through each object and it makes 
  a call each iteration for the game title associated with the game_id in each users_games row*/
  const fetchGameTitleData = async () => {
    for (let i = 0; i < userGameData.length; i++) {
      try {
        const { data, error } = await supabase
          .from("games")
          .select("game_name")
          .eq("id", userGameData[i].game_id);

        if (error) {
          const gameTitleErrorMsg = error.message;
          console.log(gameTitleErrorMsg);
        } else {
          setGameTitleArray((prevArray) => [...prevArray, data[0]?.game_name]);
          console.log("gameTitleData inside useEffect: ", data);
        }
      } catch (error) {
        const gameTitleErrorMsg = error.message;
        console.log(gameTitleErrorMsg);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  //once the userData exists we will call the GET call for the userGameData
  useEffect(() => {
    if (userData && userData.length > 0) {
      fetchUserGameData();
    }
  }, [userData]);

  //once userGameData exists we will call the GET calls for the Game titles associated with the user
  useEffect(() => {
    //checking not only if the userGameData exists but also if this call has been made already
    if (userGameData && !hasGameTitleBeenCalledOnce) {
      fetchGameTitleData();
      setHasGameTitleBeenCalledOnce(true); //after we make the fetch call we set the flag to true so this call doesnt happen again, since it makes multiple GET calls for each game title
    }
  }, [userGameData]);

  console.log("userData: ", userData);
  console.log("userGameData: ", userGameData);
  console.log("gameTitleArray: ", gameTitleArray);

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
