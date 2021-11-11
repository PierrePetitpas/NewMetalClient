import { combineReducers } from 'redux';
import { SET_BANDS, SET_FILTER } from '../actions/actions';

function visibilityFilter (state = '', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

function bands (state = [], action) {
    switch (action.type) {
        case SET_BANDS:
            return action.value;
        default:
            return state;
    }
}

const bandsApp = combineReducers ({
    visibilityFilter,
    bands
});

export default bandsApp;