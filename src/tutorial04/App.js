import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Main } from './pages/Main';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;