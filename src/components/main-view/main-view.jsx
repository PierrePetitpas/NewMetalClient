import React from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import { BandCard } from '../band-card/band-card';
import { BandView } from '../band-view/band-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';

export class MainView extends React.Component {
    
    constructor (){
        super();
        this.state = {
            bands: [],
            selectedBand: null,
            user: null
        }
    }
        componentDidMount(){
            axios.get('https://mybands.herokuapp.com/bands')
            .then(response => {
                this.setState({
                    bands: response.data
                });
            })
            .catch (error => {
                console.log(error);
            });
        
    }

    
    setSelectedBand(newSelectedBand) {
        this.setState({
          selectedBand: newSelectedBand
        });
      }
    

      /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onRegistration(register) {
    this.setState({
      register
    });
  }

    render() {
       const { bands, selectedBand, user, register } = this.state;

        /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (!register) return (<RegistrationView onRegistration={(register) => this.onRegistration(register)}/>);
      
       if (bands.length === 0) return <div className="main-view">The list is empty!</div>

       return (
           <Container className="main-view">
          
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Container fluid>
                    <Navbar.Brand href="#home">My Metal Site</Navbar.Brand>
                <Nav className="ml-auto"> 
                    <Nav.Link href="#home">Bands</Nav.Link>
                    <Nav.Link href="#link">Favorites</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#profile">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
            <Row>
               {selectedBand
               ? (<BandView band={selectedBand} onBackClick= {newSelectedBand => {this.setSelectedBand(newSelectedBand);}}/>
               )
                : bands.map(band => (
                    <BandCard key={band._id} band={band} onBandClick={(band) => {this.setSelectedBand(band)}}/>
                ))

                }
                </Row>
           </Container>
       );
    }
}

export default MainView;