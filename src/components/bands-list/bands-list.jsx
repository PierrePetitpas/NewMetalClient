import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { Link } from "react-router-dom";


import { BandCard } from '../band-card/band-card';

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    return { visibilityFilter};
};

function BandsList(props) {
    const { user, bands, visibilityFilter } = props;
    let filteredBands = bands;
    
    if (visibilityFilter !== '') {
        filteredBands = bands.filter(m => m.Name.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }

    if (!bands) return <div className="main-view"/>;

    return <>
    <Row>
         <Col xl={7} ></Col>    
        <Col xl={4} style= {{margin: '1em'}} float-left>
            <VisibilityFilterInput visibilityFilter={visibilityFilter}/>
        </Col>
    </Row>
    <Row>
            {filteredBands.map(m => (
            <Col key={m._id} style= {{'padding-bottom': '15px', 'padding-left': '30px'}}>
                <BandCard band={m}/>
            </Col>
          
        ))}
         </Row> 
        </>;
}

export default connect(mapStateToProps)(BandsList);