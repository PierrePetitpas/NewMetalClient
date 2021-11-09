import React from 'react';
import PropTypes from 'prop-types';
import { BandView } from '../band-view/band-view';

import './label-view.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';

export class LabelView extends React.Component {
  render() {

    const { label, onBackClick } = this.props;

    return (
        <div className="label-view">

        <Row>
            <Col xs={12}></Col>
        </Row>
        <hr></hr>
        <Row>
            <Col sm={4}></Col>
            <Col className="label-name label-details"  sm={4}>
            <span className="label-value">{label.Name}</span>
            </Col>
            <Col sm={4}></Col>
        </Row>
        <hr></hr>
        <Row>
                    <Col sm={2}></Col>
                    <Col className="lable-country label-details"  sm={4}>
                    <span className="label-span">Origin: </span>
                    <span className="label-span">{label.Country}</span>
                    </Col>
                    <Col className="label-creation band-details" sm={4}>
                    <span className="label-span">Creation Date:  </span>
                    <span className="label-value">{label.Creation}</span>
                    </Col>
                    <Col sm={2}></Col> 
                </Row>
                <hr></hr>
        <Row>
            <Col xs={1}></Col>
            <Col className="label-description label-details"  xs={10}>
            <span className="label-value">{label.Bio}</span>
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

LabelView.propTypes = {
  band: PropTypes.shape ({
    Label: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Country: PropTypes.string,
      Creation: PropTypes.number
    }).isRequired
  })

};