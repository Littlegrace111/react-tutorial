import React from 'react'
import './card.less'

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="match-item a-item" >
                <div className="match-title">11月20日 19:35 CBA第14轮</div>
                <div className="match-info">
                    <img className="guest team-badge" src="https://r1.ykimg.com/051000005BACDE0DAD8F6D08010EAC0C" />
                    <span className="team-goal">11</span>
                    <span className="divide">-</span>
                    <span className="team-goal">11</span>
                    <img className="team-badge" src="https://r1.ykimg.com/051000005BACDE0DAD8F6D07FB002300" />
                </div>
                <div className="team-info">
                    <span className="guest team-name">天津</span>
                    <span className="team-status">
                        <div className="bounce-wrapper"></div>
                        <span className="live-status">回看</span>
                    </span>
                    <span className="home team-name">上海</span>
                </div>
            </div>

        );
    }
}

export default Card