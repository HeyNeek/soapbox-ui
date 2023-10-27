import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Homepage from "./components/Homepage/Homepage";
import Write from "./components/Write/Write";
import Profile from "./components/Profile/Profile";

import { Routes, Route } from "react-router-dom";

function App() {
  const exampleProfile = {
    name: "Neek",
    picture: "https://i.redd.it/0mizqhma5rr91.jpg",
    location: "Houston, TX",
    bio: "GM Ball main OW2, hardstuck Gold Gekko enjoyer, degenerate, breakfast taco enthusiast, 26 yo, GO AGANE!!!",
  };

  return (
    <Container className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/write" element={<Write />} />
        <Route
          path="/profile"
          element={
            <Profile
              name={exampleProfile.name}
              picture={exampleProfile.picture}
              location={exampleProfile.location}
              bio={exampleProfile.bio}
            />
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
