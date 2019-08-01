import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Banner from './Banner';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Banner />, div);
    ReactDOM.unmountComponentAtNode(div);
});