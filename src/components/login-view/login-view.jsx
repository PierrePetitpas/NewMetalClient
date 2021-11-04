import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
     props.onLoggedIn(username);
  };
  

  return (

    <Form className="login">
    <h1 className="group-text myh1">My Metal bands site</h1>
      <h2 className="group-text">Enter the magic of music</h2>
      <Form.Group className="mb-3 group-text" controlId="formBasicUsername">
        <Form.Label className="label">Username</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} placeholder="UserName" />
      </Form.Group>
      <Form.Group className="mb-3 group-text" controlId="formBasicPassword">
        <Form.Label className="label">Password</Form.Label>
        <Form.Control  type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Button className="btn-lg btn-dark btn-block group-text" type="submit" onClick={handleSubmit}>Login</Button>
</Form>
  );
}

LoginView.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired,
  };