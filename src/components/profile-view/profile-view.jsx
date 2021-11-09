import React, { useState } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import { BandCard } from '../band-card/band-card';
import { Link } from "react-router-dom";

import './profile-view.scss';

export class ProfileView extends React.Component {
 
    
  constructor() {
    super();

    this.state = {
      Username: null,
      Password: null,
      Email: null,
      FirstName: null,
      Lastname: null,
      DOB: null,
      Favorites: []
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem('token');
    this.getUser(accessToken);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
    window.open('/', '_self');
  }

  // Current User profile data

  getUser(token) {
    const username = localStorage.getItem('user');
    axios.get(`https://mybands.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Firstname: response.data.Firstname,
          Lastname: response.data.Lastname,
          Email: response.data.Email,
          DOB: response.data.DOB,
          Favorites: response.data.Favorites
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

   handleUpdateSubmit (e) {
    e.preventDefault();

    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios.put(`https://mybands.herokuapp.com/users/${username}`, {
      Username: this.state.Username,
      Password: this.state.Password,
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Email: this.state.Email,
      DOB: this.state.DOB
    },
    {
        headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
        this.setState({
            Username: response.data.Username,
            Password: response.data.Password,
            Firstname: response.data.Firstname,
            Lastname: response.data.Lastname,
            Email: response.data.Email,
            DOB: response.data.DOB
          });
      localStorage.setItem('user', this.state.Username);
      const data = response.data;
      console.log(data);
        alert("Your profile is updated.");
    })
    .catch(e => {
      console.log('error updating the user')
    });
  }

  // Delete A User

  handleDeleteSubmit() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    axios.delete(`https://mybands.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        console.log(response);
        alert('Profile has been deleted.');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.open('#', '_self');
      })
      .catch(function (error) {
        console.log(error);
      })
  }

//Remove favorite from list

handleRemoveSubmit(band) {
  const username = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  axios.delete(`https://mybands.herokuapp.com/users/${username}/bands/${band._id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then((response) => {
      alert("Movie was removed");
      this.componentDidMount();
    })
    .catch(function (error) {
      console.log(error);
    });
}


  setUsername(value) {
    this.state.Username = value;
  }

  setPassword(value) {
    this.state.Password = value;
  }

  
  setEmail(value) {
    this.state.Email = value;
  }

  setFirstname(value) {
    this.state.FirstName = value;
  } 

  setLastname(value) {
    this.state.Lastname = value;
  } 

  setBirthday(value) {
    this.state.DOB = value;
  }

  render (){

    const { handleRemoveSubmit, onBackClick, bands, band,  user } = this.props;
    const FavoriteBands = bands.filter(m => {
      return this.state.Favorites.includes(m._id)
    });

  return (

<div>

    <Form className="update">
    <h1 className="update-text myh1">My Metal bands site</h1>
      <h2 className="register-text">User Profile</h2>
      <Form.Group className="mb-3 register-text" controlId="formBasicUsername">
        <Form.Label className="label">Username</Form.Label>
        <Form.Control type="text" onChange={(e) => this.setUsername(e.target.value)} placeholder={this.state.Username} />
      </Form.Group>
      <Form.Group className="mb-3 register-text" controlId="formBasicPassword">
        <Form.Label className="label">Password</Form.Label>
        <Form.Control  type="password" onChange={(e) => this.setPassword(e.target.value)} placeholder={this.state.Password} />
      </Form.Group>
      <Form.Group className="mb-3 register-text" controlId="formBasicEmail">
        <Form.Label className="label">Email</Form.Label>
        <Form.Control  type="email" onChange={(e) => this.setEmail(e.target.value)} placeholder={this.state.Email} />
      </Form.Group>
      <Form.Group className="mb-3 register-text" controlId="formBasicFirstName">
        <Form.Label className="label">First Name</Form.Label>
        <Form.Control type="text" onChange={(e) => this.setFirstname(e.target.value)} placeholder={this.state.Firstname} />
      </Form.Group>
      <Form.Group className="mb-3 register-text" controlId="formBasicLastName">
        <Form.Label className="label">Last Name</Form.Label>
        <Form.Control type="text" onChange={(e) => this.setLastname(e.target.value)} placeholder={this.state.Lastname} />
      </Form.Group>
      <Form.Group className="mb-3 register-text" controlId="formBasicBirthday">
        <Form.Label className="label">Birthday</Form.Label>
        <Form.Control type="date" onChange={(e) => this.setBirthday(e.target.value)} placeholder={this.state.DOB} />
      </Form.Group>
      <Button className="btn-lg btn-dark btn-block register-text" type="submit" onClick={(e) => this.handleUpdateSubmit(e)}>Update</Button>
      <br></br>
      <Button className="btn-lg btn-dark btn-block register-text" type="submit" onClick={(e) => this.handleDeleteSubmit()}>Unregister</Button>
  </Form>   
  <hr></hr>
  <Row className="favoriteBand-col"> 
        <Col xs={12} className="favorite-title" >
          <h2 className="favorite-bands">Favorite Bands</h2>
        </Col>
       </Row> 
        <Row className="favorite-row">
          { FavoriteBands.map((band) => (
           
           <Col className="my-band-card" xs={12}  md={4} lg={3} key={band._id}>

            <Card style={{ width: '18rem' }} bg= "dark">
              <Card.Img variant="top" src={band.ImagePath} />
              <Card.Body>
              <Card.Title className="cardTitle" style={{fontSize: 35, color:'black'}}>{band.Name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize: 25}}>{band.Genre.Name}</Card.Subtitle>
                    <div>
                    <Link to={`/bands/${band._id}`}>        
                    <Button variant="secondary">More Details</Button>
                    </Link>
                    </div>
                    <br></br>
                    <div>
                    <Button className="unfavoritebandButton" variant="secondary" onClick={() => { this.handleRemoveSubmit(band) }} >Remove Favorite</Button>
                    </div>
              </Card.Body>
            </Card>               
            </Col>
          ))
        }
         
        </Row>

</div>

  );
}
}

/*ProfileView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    DOB: PropTypes.number 
  }).isRequired
};*/