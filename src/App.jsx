import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container className="app-container">
      <Navbar />
      <Row>
        <Col>
          <br />
          <Homepage />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
