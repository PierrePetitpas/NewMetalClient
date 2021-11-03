import React, { useState } from 'react';
import PropTypes from "prop-types";
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
    console.log(username, password, email, firstname, lastname, DOB);
    /* Send a request to the server for authentication */
    /* then call props on registored user(username) */
    props.onRegistration(username);
  };

  return (

    <Form className="login">
    <h1>My Metal bands site</h1>
      <h2>Please Register!</h2>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label className="label">Username</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} placeholder="username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="label">Password</Form.Label>
        <Form.Control  type="password" onChange={e => setPassword(e.target.value)} placeholder="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">Email</Form.Label>
        <Form.Control  type="email" onChange={e => setEmail(e.target.value)} placeholder="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label className="label">First Name</Form.Label>
        <Form.Control type="text" onChange={e => setFirstName(e.target.value)} placeholder="firstname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label className="label">Last Name</Form.Label>
        <Form.Control type="text" onChange={e => setLastName(e.target.value)} placeholder="lastname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBirthday">
        <Form.Label className="label">Birthday</Form.Label>
        <Form.Control type="date" onChange={e => setBirthday(e.target.value)} placeholder="DOB" />
      </Form.Group>
      <Button className="btn-lg btn-dark btn-block" type="submit" onClick={handleSubmit}>Register</Button>
</Form>               
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};