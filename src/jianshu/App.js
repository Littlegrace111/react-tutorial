import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './reset.css';
import './statics/iconfont.css';
import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header /> 
                    <BrowserRouter>
                        <Route path='/' exact component={ Home }></Route>
                        <Route path='/detail' component={ Detail }></Route>
                    </BrowserRouter>  
                </Fragment> 
            </Provider>
        );
    }
}

export default App;