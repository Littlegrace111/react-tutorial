import React from 'react';
import { render   } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Game from './tutorial01/index'
// import Layout from './tutorial02/Layout'
// import Card from './card/card'
import TodoList from './videoItem/TodoList'
import App from './videoItem/App';


render((
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
    // <App />,
    document.getElementById('app')
);