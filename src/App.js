// Importations des modules React et des composants React Bootstrap nécessaires
import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { Button } from "react-bootstrap";

// Définition du composant App
function App() {
  // Retourne le contenu de l'application
  return (
    <>
      {/* Début du fragment React */}
      <div className="App">
        {/* Barre de navigation Bootstrap */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">World Tour </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="">About</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Contenu principal */}
        <Container>
          <h1 className="animated-title">Welcome ! </h1>
          {/* Row de cartes Bootstrap */}

          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/info-jeunesse.fr/wp-content/uploads/2016/10/rome.jpg"
                  className="mx-auto d-block"
                />
                <Card.Body>
                  <Card.Title>Rome</Card.Title>
                  <Card.Text>
                    Rome, la ville éternelle, respire l'histoire à chaque coin
                    de rue. Du majestueux Colisée à la grandeur imposante du
                    Forum romain.
                  </Card.Text>
                  <Button variant="primary">Explore Rome</Button>{" "}
                  {/* Button for Rome */}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://th.bing.com/th/id/R.5d914e3c8ca29a71906dee1b87392b59?rik=WexQYXZlBuck7g&pid=ImgRaw&r=0"
                  className="mx-auto d-block"
                />
                <Card.Body>
                  <Card.Title>Paris</Card.Title>
                  <Card.Text>
                    {" "}
                    Paris, la ville des lumières, éblouit par sa beauté
                    intemporelle et son charme envoûtant. Nichée sur les rives
                    sinueuses de la Seine.
                  </Card.Text>
                  <Button variant="primary">Explore Paris</Button>{" "}
                  {/* Button for Rome */}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://www.voyage-russie.fr/cdn/ru-public/en_russie.jpg"
                  className="mx-auto d-block"
                />
                <Card.Body>
                  <Card.Title>Russe </Card.Title>
                  <Card.Text>
                    La Russie, vaste et mystérieuse, évoque des images de vastes
                    étendues de terres sauvages, de cathédrales imposantes et de
                    villes animées.
                  </Card.Text>
                  <Button variant="primary">Explore Russe</Button>{" "}
                  {/* Button for Rome */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Fin du fragment React */}
    </>
  );
}

export default App; // Assurez-vous que cette ligne est présente pour exporter le composant App par défaut
