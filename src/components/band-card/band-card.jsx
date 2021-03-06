import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './band-card.scss';

import { Link } from "react-router-dom";

export class BandCard extends React.Component {

  addFavorite() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    axios.post(`https://mybands.herokuapp.com/users/${username}/bands/${this.props.band._id}`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        alert(`Added to Favorites`)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

    render () {
      const { band } = this.props;

        return (
          
          
         
                <Card style={{ width: '18rem', 'font-family': 'Pirata One, cursive' }}  className="bandCard text-center" bg= "dark">
                  <Card.Img className="cardImage" variant="top" src={band.ImagePath} />
                  <Card.Body>
                    <Card.Title className="cardTitle" style={{"font-size": "35px", color: "black"}}>{band.Name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{"font-size": "25px"}}>{band.Genre.Name}</Card.Subtitle>
                    <div>
                    <Link to={`/bands/${band._id}`}>        
                    <Button variant="secondary">More Details</Button>
                    </Link>
                    </div>
                    <br></br>
                    <div>
                    <Button variant="secondary" value={band._id} onClick={(e) => this.addFavorite(e, band)}>Add to favorites</Button>
                    </div>
                  </Card.Body>
                </Card>
            
        

      
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

