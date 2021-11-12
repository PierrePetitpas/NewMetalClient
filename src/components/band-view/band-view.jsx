import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col, Modal } from 'react-bootstrap';
import './band-view.scss';
import { Link } from "react-router-dom";


export class BandView extends React.Component {
 

    render(){
        const { user, band, onBackClick} = this.props;
        const buttonstyle = {
        color: 'white',
        'padding-top': '5px',
        'font-size': '35px',
        width: "fit-content",
        };

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
                    <Col className="band-name band-details"  sm={4}>
                    <span className="label-span">Name: </span>
                    <span className="label-value">{band.Name}</span>
                    </Col>
                    <Col className="band-origin band-details" sm={4}>
                    <span className="label-span">Origin: </span>
                    <span className="label-value">{band.Country}</span>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <Row>
                    <Col sm={2}></Col>
                    <Col className="band-genre band-details" sm={4}>
                    <span className="label-span">Genre: </span>
                    <Link to={`/genres/${band.Genre.Name}`}>
                    <Button style={buttonstyle} className="label-button" variant="link">{band.Genre.Name}</Button>
                  </Link>
                    </Col>
                    <Col className="band-creation band-details" sm={4}>
                    <span className="label-span">Creation Date:  </span>
                    <span className="label-value">{band.Creation}</span>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <Row>
                    <Col sm={2}></Col>
                    <Col className="band-label band-details"  sm={4}>
                    <span className="label-span">Label: </span>
                    <Link to={`/labels/${band.Label.Name}`}>
                    <Button style={buttonstyle} variant="link" className="label-button">{band.Label.Name}</Button>
                    </Link>
                    </Col>
                    <Col className="label-creation band-details" sm={4}>
                    <span className="label-span">Label Origin:  </span>
                    <span className="label-value">{band.Label.Country}</span>
                    </Col>
                    <Col sm={2}></Col> 
                </Row>
                <hr></hr>
                <Row>
                    <Col xs={1}></Col>
                    <Col className="band-description band-details"  xs={10}>
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

/*BandView.propTypes = {
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
  };*/

  export default BandView;