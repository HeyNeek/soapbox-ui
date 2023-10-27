import "../Navbar/Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
      </nav>
    </>
  );
};

export default Navbar;
