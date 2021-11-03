import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './band-card.scss';

export class BandCard extends React.Component {
    render () {
      const { band , onBandClick } = this.props;

        return (
          <Container className="band-card w-50">
          <Row>
            <Col className="my-band-card" sm='9'>
              <CardGroup className="m-5  d-block">
                <Card className="bandCard text-center" bg= "dark">
                  <Card.Img className="cardImage" variant="top" src={band.ImagePath} />
                  <Card.Body>
                    <Card.Title className="cardTitle">{band.Name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{band.Genre.Name}</Card.Subtitle>
                    <Button variant="secondary" onClick={() => onBandClick (band)} >More Details</Button>
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
    onBandClick: PropTypes.func.isRequired
  };