import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Homepage from "./components/Homepage/Homepage";
import Write from "./components/Write/Write";
import Profile from "./components/Profile/Profile";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Container>
  );
}

export default App;
