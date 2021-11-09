import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './band-card.scss';

import { Link } from "react-router-dom";

export class BandCard extends React.Component {
    render () {
      const { band } = this.props;

        return (
          
           <Row>
            <Col  xs={12}  md={4} lg={3} className="my-band-card" >
            
            <Card  style={{ width: '18rem' }}  bg= "dark">
              <Card.Img className="card-image" variant="top" src={band.ImagePath} />
              <Card.Body>
              <Card.Title className="cardTitle" style={{fontSize: 35, color:'black'}}>{band.Name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize: 25}}>{band.Genre.Name}</Card.Subtitle>
                    <div>
                    <Link to={`/bands/${band._id}`}>        
                    <Button variant="secondary">More Details</Button>
                    </Link>
                    </div>
              </Card.Body>
            </Card>
                          
            </Col>
            </Row>  
      
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

