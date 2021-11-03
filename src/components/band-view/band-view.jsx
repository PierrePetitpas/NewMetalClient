import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './band-view.scss';

export class BandView extends React.Component {
    render(){
        const { band, onBackClick } = this.props;

        return (
            <Container className="myband-view">

                <Row>
                    <div className="band-view">
                        <div className="div-view band-poster">
                            <img src={band.ImagePath} />
                        </div>
                        <div className="div-view band-name">
                            <span className="label">Name: </span>
                            <span className="value">{band.Name}</span>
                        </div>
                        <div className="div-view band-description">
                            <span className="label">Description: </span>
                            <span className="value">{band.Description}</span>
                        </div>
                        <div className="div-view band-origin">
                            <span className="label">Origin: </span>
                            <span className="value">{band.Country}</span>
                        </div>
                        <div className="div-view band-creation">
                            <span className="label">Creation Date: </span>
                            <span className="value">{band.Creation}</span>
                        </div>
                        <div className="div-view band-genre">
                            <span className="label">Genre: </span>
                            <span className="value">{band.Genre.Name}</span>
                        </div>
                        <div className="div-view genre-description">
                            <span className="label">Genre Description: </span>
                            <span className="value">{band.Genre.Description}</span>
                        </div>
                        <div className="div-view band-label">
                            <span className="label">Label: </span>
                            <span className="value">{band.Label.Name}</span>
                        </div>
                        <div className="div-view label-bio">
                            <span className="label">Label Bio: </span>
                            <span className="value">{band.Label.Bio}</span>
                        </div>
                        <div className="div-view label-creation">
                            <span className="label">Label Creation date: </span>
                            <span className="value">{band.Label.Creation}</span>
                        </div>
                        <div className="div-view label-creation">
                            <span className="label">Label Origin: </span>
                            <span className="value">{band.Label.Country}</span>
                        </div>
                        <div className="div-view">
                        <   button className="btn-lg btn-dark" onClick={() => { onBackClick(null); }}>Back to bands</button>
                        </div>
                    </div>
                </Row>
            </Container>
        );
    }
    
}

BandView.propTypes = {
    band: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired
      }),
      Label: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
        Creation: PropTypes.number.isRequired,
        Country: PropTypes.string
      }),
      Country: PropTypes.string.isRequired,
      Continent: PropTypes.string,
      Creation: PropTypes.number.isRequired,
      ImagePath: PropTypes.string.isRequired,
      Active: PropTypes.bool
    }).isRequired,
  };