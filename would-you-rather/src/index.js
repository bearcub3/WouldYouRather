import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middlewares from './middlewares';
import { Normalize } from 'styled-normalize';

const store = createStore(reducer, middlewares);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Normalize />
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
