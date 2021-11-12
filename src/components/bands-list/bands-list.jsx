import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

import { BandCard } from '../band-card/band-card';

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    return { visibilityFilter};
};

function BandsList(props) {
    const { bands, visibilityFilter } = props;
    let filteredBands = bands;
    
    if (visibilityFilter !== '') {
        filteredBands = bands.filter(m => m.Name.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }

    if (!bands) return <div className="main-view"/>;

    return 
}