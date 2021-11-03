import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';

// Import statement to indicate that you need to bundle index.scss
import './index.scss';

// Main component
class MyBandApplication extends React.Component {
    render() {
        return (
            <MainView />
        );
    }
}
// Finds the root of my app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render my app in the root DOM element
ReactDOM.render(React.createElement(MyBandApplication), container);
