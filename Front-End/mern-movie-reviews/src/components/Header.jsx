import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Switch, Route, Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link className="Reviews" href="/reviews">Add Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;