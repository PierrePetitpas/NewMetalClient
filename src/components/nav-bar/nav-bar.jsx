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
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" expand="lg" >
          
                <Navbar.Brand className=" align-left" href="#">My Metal Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link as={Link} to={'/'}>Bands</Nav.Link>
                <Nav.Link as={Link} to={`/users/${user}`}>Profile</Nav.Link>
                <Nav.Link href="/" onClick={() => { this.onLoggedOut() }} >Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
      
    );
  }
}
export default NavBar;