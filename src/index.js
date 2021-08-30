import React from 'react';
import ReactDOM from 'react-dom';
import  Home from './components/Home';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
const divRoot = document.querySelector('#root');

ReactDOM.render( 
    <Provider store={store}>
        <Home />
    </Provider>,
    divRoot 
);