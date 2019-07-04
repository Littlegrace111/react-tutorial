import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'; // Redux异步请求中间件

const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enable redux devtool, 也是redux的一个中间件
    applyMiddleware(thunk)
);

export default store;