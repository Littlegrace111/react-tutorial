import React from 'react'
import { render } from 'react-dom'
// import Module1 from './module/module1'
// import Module2 from './module/module2'
// import './style/index.css'
import Game from './tutorial01/index';

// export default class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Module1 />
//                 <Module2 />
//             </div>
//         )
//     }
// }


render(
    <Game />,
    document.getElementById('app')
);