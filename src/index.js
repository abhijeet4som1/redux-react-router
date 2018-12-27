import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import {Landing} from './landing';
import {configureStore} from './store/configureStore';

import './client/css/index.css';

let store = configureStore({});
ReactDOM.render(
    <Provider store={store}>
        <Landing />
    </Provider>, document.getElementById('root'));
