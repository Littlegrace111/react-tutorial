import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TodoList from '../TodoList';
import Detail from './Detail';

const Home = () => (
    <div>
        <h1>Welcome to react-router</h1>
    </div>
);

export const Header = (props) => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/todolist'>todolist</Link></li>
                <li><Link to={'/detail' + '?a=wu&b=xiao'}>detail</Link></li>
            </ul>
        </nav>
    </header>
)


export const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/todolist' component={TodoList} />
            <Route path='/detail' component={Detail} />
        </Switch>
    </main>
);