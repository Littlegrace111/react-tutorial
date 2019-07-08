import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './reset.css';
import './statics/iconfont.css';
import store from './store';
import Header from './common/header'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />    
            </Provider>
        );
    }
}

export default App;