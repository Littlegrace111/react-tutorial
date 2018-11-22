/**
 * Created by dongni on 2018/2/8.
 */

import React from 'react';
//import ReactDOM from 'react-dom';
import './tutorial001.css';

// class Square extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         value: props.value,
//     //     };
//     // }
//
//     render() {
//         return (
//             <button className="square" onClick={()=>this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }


//react 支持 functional components
// function Square(props) {
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }
const Square = (props) => (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
)

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={()=> this.props.onClick(i)}
            />);
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    //handleBoardClick
    handleBoardClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        //const history = this.state.history;
        const current = history[history.length - 1]; //history的最后一个
        const squares = current.squares.slice(); //深拷贝数组
        if(this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : '0';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    
        for(let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleMoveClick(step) {
        this.setState({ //每次setState 会触发re-Render
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.handleMoveClick(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if(winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : '0');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleBoardClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );
