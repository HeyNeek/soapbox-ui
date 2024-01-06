import "../Navbar/Navbar.css";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SignInUpModal from "../SignInUpModal/SignInUpModal";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //dummy function until we get user sessions with supabase
  const loginHandler = () => {
    if (isLoggedIn === true) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <nav className="left-navbar">
        <ul>
          <li>
            <Link className="navbar-selection" as={NavLink} to="/" exact>
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-selection" as={NavLink} to="/write">
              Write
            </Link>
          </li>
          <li>
            <Link className="navbar-selection" as={NavLink} to="/profile">
              Profile
            </Link>
          </li>
        </ul>

        {isLoggedIn ? (
          <ul className="navbar-selection">
            <div className="login-handler-div" onClick={loginHandler}>
              Log Out
              <FontAwesomeIcon className="logout-icon" icon={faArrowRight} />
            </div>
          </ul>
        ) : (
          <ul className="navbar-selection">
            <SignInUpModal onClick={loginHandler} />
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
