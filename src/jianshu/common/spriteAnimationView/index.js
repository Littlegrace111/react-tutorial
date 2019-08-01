import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Logo = styled.div `
    width: ${(props)=>props.width + 'px'};
    height: ${(props)=>props.height + 'px'};
    background: url(${(props) => props.imgPic});
    margin: 0 auto;

    &.sprite-animation {
        animation: star 1000ms steps(6, end) 0ms infinite normal;
    }

    @keyframes star {
        from {background-position: 0;}
        to {background-position: -831px;}
    }
`

export default class SpriteAnimation extends Component {
    // static propTypes = {
    //     frameWidth: PropTypes.number.isRequired,
    //     frameHeight: PropTypes.number.isRequired,
    //     frameCount: PropTypes.number.isRequired
    // }

    // static defaultProps = {
    //     direction: 1,
    //     frameImg: spritePic
    // }

    constructor(props) {
        super(props)
        this.state = {
            stepCount: 0,
        }
        this.timer = null;
    }

    startAnimation() {
        this.timer && clearInterval(this.timer);
        this.timer = setInterval(() => this.step(), 100);
    }

    stopAnimation() {
        this.timer && clearInterval(this.timer);
        this.timer = null;
    }

    componentDidMount() {
        this.startAnimation();
    }

    step() {
        const { stepCount } = this.state;
        const { frameCount } = this.props;
        this.setState({
            stepCount: stepCount >= (frameCount - 1) ? 0 : (stepCount + 1)
        })
    }

    render() {
        const {stepCount} = this.state;
        const { frameWidth, direction, frameHeight, frameImg } = this.props;
        let backgroundPosition;
        if(direction === 1) { // horizontal
            backgroundPosition = (-1 * stepCount * frameWidth) + 'px 0px';
        } else if(direction === -1) { // vertical
            backgroundPosition = '0px' + (-1 * stepCount * frameHeight) + 'px';
        } 
        
        return (
            <Logo 
                width={frameWidth}
                height={frameHeight}
                imgPic={frameImg}
                style={{backgroundPosition: backgroundPosition}}
            />
        )
    }
}

