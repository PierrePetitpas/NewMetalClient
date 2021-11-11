import React from "react";
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";

import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";
import { BandCard } from "../band-card/band-card";

const mapStateProps = state => {
    const { visibilityFilter } = state;
    return { visibilityFilter };
};

function BandsList (props) {
    const { bands, visibilityFilter } = props;
    let filteredBands = bands;

    if (visibilityFilter !== '') {
        filteredBands = bands.filter(m => m.Name.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }

    if (!bands) return <div className="main-view"/>;

    return <>
        <Col md={4} style={{ margin: '1em'}}>
            <VisibilityFilterInput visibilityFilter={visibilityFilter} />
        </Col>
    {filteredBands.map(m => (
      <Col key={m._id}>
          <BandCard band={m}/>
      </Col>  
    ))}
    </>;
}

export default connect(mapStateProps)(BandsList);