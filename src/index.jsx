import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import bandsApp from './reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

// Import statement to indicate that you need to bundle index.scss
import './index.scss';

const store = createStore(bandsApp);

// Main component
class MyBandApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MainView />
            </Provider>
       )
    }
}
// Finds the root of my app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render my app in the root DOM element
ReactDOM.render(React.createElement(MyBandApplication), container);
