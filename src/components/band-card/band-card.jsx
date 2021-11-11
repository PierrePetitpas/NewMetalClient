import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './band-card.scss';

import { Link } from "react-router-dom";

export class BandCard extends React.Component {
    render () {
      const { band } = this.props;

        return (
          
          <Container className="band-card w-25">
          <Row>
            <Col className="my-band-card" >
              <CardGroup className=" d-block">
                <Card style={{ width: '18rem' }}  className="bandCard text-center" bg= "dark">
                  <Card.Img className="cardImage" variant="top" src={band.ImagePath} />
                  <Card.Body>
                    <Card.Title className="cardTitle" style={{"font-size": "35px", color: "black"}}>{band.Name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{"font-size": "25px"}}>{band.Genre.Name}</Card.Subtitle>
                    <div>
                    <Link to={`/bands/${band._id}`}>        
                    <Button variant="secondary">More Details</Button>
                    </Link>
                    </div>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>

      
      );
    }
}

BandCard.propTypes = {
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

