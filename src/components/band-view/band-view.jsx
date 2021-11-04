import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './band-view.scss';

export class BandView extends React.Component {
    render(){
        const { band, onBackClick } = this.props;

        return (
            <div className="myband-view">

                <Row>
                    <Col className="band-poster" xs={12}>
                        <img src={band.ImagePath} />
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col sm={2}></Col>
                    <Col className="band-name band-details" xs={5} sm={4}>
                    <span className="label-span">Name: </span>
                    <span className="label-value">{band.Name}</span>
                    </Col>
                    <Col className="band-origin band-details"xs={5} sm={4}>
                    <span className="label-span">Origin: </span>
                    <span className="label-value">{band.Country}</span>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}></Col>
                    <Col className="band-genre band-details" xs={5} sm={4}>
                    <span className="label-span">Genre: </span>
                    <span className="label-value">{band.Genre.Name}</span>
                    </Col>
                    <Col className="band-creation band-details"xs={5} sm={4}>
                    <span className="label-span">Creation Date:  </span>
                    <span className="label-value">{band.Creation}</span>
                    </Col>
                
                </Row>
                <Row>
                    <Col sm={2}></Col>
                    <Col className="band-label band-details" xs={5} sm={4}>
                    <span className="label-span">Label: </span>
                    <span className="label-value">{band.Label.Name}</span>
                    </Col>
                    <Col className="label-creation band-details"xs={5} sm={4}>
                    <span className="label-span">Label Origin:  </span>
                    <span className="label-value">{band.Label.Country}</span>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col className="band-description band-details"  xs={12}>
                    <span className="label-value">{band.Description}</span>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col></Col>
                    <Col className="back-button">
                        <button className="btn-lg btn-dark" onClick={() => { onBackClick(null); }}>Back to bands</button>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
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