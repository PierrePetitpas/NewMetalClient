import React from 'react';
import PropTypes from 'prop-types';
import { BandView } from '../band-view/band-view';
import { Link } from "react-router-dom";

import './genre-view.scss';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';

export class GenreView extends React.Component {
  render() {

    const { genre, onBackClick, bands, user } = this.props;

    return (
        <div className="genre-view">
       
        <Row>
            <Col xs={12}></Col>
        </Row>
        <hr></hr>
        <Row>
            <Col sm={4}></Col>
            <Col className="genre-name label-details"  sm={4}>
            <span className="genre-value">{genre.Name}</span>
            </Col>
            <Col sm={4}></Col>
        </Row>
        <hr></hr>
        <Row>
            <Col xs={1}></Col>
            <Col className="genre-description genre-details"  xs={10}>
            <span className="label-value">{genre.Description}</span>
            </Col>
        </Row>
        <hr></hr>
        <Row>
            <Col></Col>
            <Col className="back-button">
                <button className="btn-lg btn-dark" onClick={() => { onBackClick(null); }}>Back to details</button>
            </Col>
            <Col></Col>
        </Row>
         

    </div>
    );
  }
}

GenreView.propTypes = {
  band: PropTypes.shape ({
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string
    }).isRequired
  })

};