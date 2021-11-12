import { combineReducers } from 'redux';

import { SET_FILTER, SET_BANDS } from '../actions/actions';



function visibilityFilter(state = '', action) { //Returning an empty state
    switch (action.type) { 
      case SET_FILTER:
        return action.value; //Returning the value that's in the action
      default: 
        return state;
    }
  }
  
function bands(state = [], action) {
    switch (action.type) { 
      case SET_BANDS:
        return action.value; 
      default: 
        return state;
    }
  }
  
  const bandsApp = combineReducers({ 
    visibilityFilter, 
    bands
  });
  
export default bandsApp; //exporting the dafault which is the both reducers 