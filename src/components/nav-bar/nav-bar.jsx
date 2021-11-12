import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';

export class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  }

  render() {
    const { user } = this.props;

    if (!user) return null;

    return (
        <Container className="main-view hide-nav">
          
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" expand="lg" >
                <Navbar.Brand href="#">My Metal Site</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link as={Link} to={'/'}>Bands</Nav.Link>
                <Nav.Link as={Link} to={`/users/${user}`}>Profile</Nav.Link>
                <Nav.Link href="/" onClick={() => { this.onLoggedOut() }} >Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
        </Container>
    );
  }
}
export default NavBar;