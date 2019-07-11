import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Header, Main } from './pages/Main';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;