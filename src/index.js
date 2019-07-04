import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Game from './tutorial01/index'
// import Layout from './tutorial02/Layout'
// import Card from './card/card'
// import TodoList from './videoItem/TodoList'
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './tutorial04/store';
import App from './tutorial04/App';

render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('app')
);