import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import configureStore from './storeSettings/configureStore';

let initialState = {
    coins : []
}
const store = configureStore(initialState)
ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root')
                );
registerServiceWorker();
