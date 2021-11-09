import React, { useState } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';


import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ firstname, setFirstName] = useState('');
  const [ lastname, setLastName] = useState('');
  const [ DOB, setBirthday] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://mybands.herokuapp.com/users', {
      Username: username,
      Password: password,
      Firstname: firstname,
      Lastname: lastname,
      Email: email,
      DOB: DOB
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      window.open('#', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
    })
    .catch(e => {
      console.log('error registering the user')
    });
  };

  return (

    <Form className="register">
    <h1 className="register-text myh1">My Metal bands site</h1>
      <h2 className="register-text">Please Register!</h2>
      <Form.Group className="mb-3 register-text" controlId="formBasicUsername">
        <Form.Label className="label">Username</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} placeholder="username" />
      </Form.Group>
      <Form.Group className="mb-3 register-text" controlId="formBasicPassword">
        <Form.Label className="label">Password</Form.Label>
        <Form.Control  type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />
      </Form.Group>
      <Form.Group className="mb-3 register-text" controlId="formBasicEmail">
        <Form.Label className="label">Email</Form.Label>
        <Form.Control  type="email" onChange={e => setEmail(e.target.value)} placeholder="email" />
      </Form.Group>
      <Form.Group className="mb-3 register-text" controlId="formBasicFirstName">
        <Form.Label className="label">First Name</Form.Label>
        <Form.Control type="text" onChange={e => setFirstName(e.target.value)} placeholder="firstname" />
      </Form.Group>
      <Form.Group className="mb-3 register-text" controlId="formBasicLastName">
        <Form.Label className="label">Last Name</Form.Label>
        <Form.Control type="text" onChange={e => setLastName(e.target.value)} placeholder="lastname" />
      </Form.Group>
      <Form.Group className="mb-3 register-text" controlId="formBasicBirthday">
        <Form.Label className="label">Birthday</Form.Label>
        <Form.Control type="date" onChange={e => setBirthday(e.target.value)} placeholder="DOB" />
      </Form.Group>
      <Button className="btn-lg btn-dark btn-block register-text" type="submit" onClick={handleSubmit}>Register</Button>
</Form>               
  );
}


/*RegistrationView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    DOB: PropTypes.number 
  }).isRequired
};*/