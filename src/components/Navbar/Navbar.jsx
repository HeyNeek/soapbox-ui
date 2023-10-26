import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="left-navbar">
      <ul>
        <li className="navbar-selection">
          <div>Home</div>
        </li>
        <li className="navbar-selection">
          <div>Community</div>
        </li>
        <li className="navbar-selection">
          <div>Write</div>
        </li>
        <li className="navbar-selection">
          <div>Profile</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
