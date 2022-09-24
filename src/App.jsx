import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import  { CardText, CardBody, CardTitle, CardSubtitle, CardImg,Row,Col,Alert,Navbar,NavDropdown,Nav,Container,Offcanvas,Form,FormControl} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
            <div>
                  <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">Bienvenue sur mon formulaire de conctat</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Home</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Appels</Nav.Link>
              <Nav.Link href="#action2">Messages</Nav.Link>
              <NavDropdown title="Chat" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">verifier les appels manqués</NavDropdown.Item>
                <NavDropdown.Item href="#action4">envoyer une Alert</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  rechercher des amis
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    <>
  {[
    'success',
  ].map((variant) => (
    <><><Alert key={variant} variant={variant}>
      utilisez la liste deroulante en haut a gauche de l'ecran pour acceder au formulaire
      <Alert.Link href="#"></Alert.Link>
    </Alert><Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="success" type="submit">
          cliquer ici pour soumettre le formulaire
        </Button>
      </Form></><Alert variant="success">
        <Alert.Heading>Merci d'avoir rempli ce formulaire à la prochaine</Alert.Heading>
        <p>
        ......
        </p>
        <hr />
        <p className="mb-0">
          vos imformations resteron securisées !!
        </p>
      </Alert></>


  ))}
</>
            </div>
  
    );
  }
}

export default App;