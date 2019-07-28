import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div `
    position: relative;
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    border-radius: 10px;
    overflow: hidden;

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition-timing-function: ease;
        transition-property: left;
    }
`;

const BtnWrapper = styled.div `
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50%;
    margin-top: -20px;
    background: rgba(0, 0, 0, 0.4);

    &.left-btn {
        left: 0;
        border-radius: 0 5px 5px 0;
    }

    &.right-btn {
        right: 0;
        border-radius: 5px 0px 0px 5px;
    }
`

const LEFT_Dir = 0;
const RIGHT_Dir = 1;

class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            before: this.nextStepStyle(-625, 0),
            middle: this.nextStepStyle(0, 0),
            after: this.nextStepStyle(625, 0),
            currentIndex: 0,
            step: 0
        }
        this.interval = null;
        this.timer = null;
        this.startTime = Number(new Date());
    }

    // direction: 表示Banner是向右或向左
    // AnimationCount: animation次数, -1表示infinite
    startBannerAnimation(direction, infinite) {
        switch(direction) {
            case LEFT_Dir: {            
                if(infinite) {
                    this.animationInfinite(-625);
                } else {
                    this.step(-625);
                }
            }
            return;
            case RIGHT_Dir: {            
                if(infinite) {
                    this.animationInfinite(625);
                } else {
                    this.step(625);
                }
            }  
            return;
        }
    }

    // 向左 -625， 向右 625
    animationInfinite(width) {
        this.interval && clearInterval(this.interval)
        this.interval = setInterval(() => {
            this.throttle(() => this.step(width), 1000);
        }, 5000)
    }

    throttle(callback, delay) {
        const currentTime = Number(new Date());
        this.timer && clearTimeout(this.timer);
        if(currentTime - this.startTime >= delay) {
            callback.apply(this, arguments);
            this.startTime = currentTime;
        } else {
            this.timer = setTimeout(callback, delay);
        }
    }

    step(width) { // -625  625
        console.log('step, width = ' + width);
        const { before, middle, after, currentIndex } = this.state;
        const { imgList } = this.props;
        let newIndex = 0;
        if(width < 0) {
            newIndex = currentIndex + 1 > imgList.length - 1 ? 0 : currentIndex + 1;
        } else {
            newIndex = currentIndex - 1 < 0 ? (imgList.length - 1) : currentIndex - 1;
        }
        this.setState({
            before: this.nextStepStyle(before.pos, width),
            middle: this.nextStepStyle(middle.pos, width),
            after: this.nextStepStyle(after.pos, width),
            currentIndex: newIndex,
            step: width
        })
    }

    stopBannerAnimation() {
        this.interval && clearInterval(this.interval);
        this.interval = null;
        
        this.timer && clearTimeout(this.timer);
        this.timer = null;
    }

    componentDidMount() {
        // this.startBannerAnimation(LEFT_Dir, true);
        this.startBannerAnimation(RIGHT_Dir, true);
    }

    componentWillUnmount() {
        this.stopBannerAnimation();
    }

    handleDirectionBtnClick(direction) {
        console.log('handleDirectionBtnClick, direction = ' + direction);
        // this.stopBannerAnimation();
        if(direction === LEFT_Dir) {
            // this.step(-625);
            this.throttle(() => this.step(-625), 1000);
        } else if(direction === RIGHT_Dir) {
            // this.step(625);
            this.throttle(() => this.step(625), 1000);
        }
    }

    nextStepStyle(currentPos, step) {
        if(step && currentPos === step) 
            return {
                pos: 0 - step,
                duration: 0
            }
        else 
            return {
                pos: currentPos + step,
                duration: 1
            }
    }

    nextStep(currentPos, step) {
        if(step && currentPos === step) 
            return (0-step);
        else 
            return (currentPos + step);
    }

    showBanner(imgList) {
        if(imgList.length === 1) {
            return (
                <img 
                    style={{left: '0px'}}
                    src={imgList[0]}
                />
            )
        } else if(imgList.length > 1){
            const { before, middle, after, currentIndex} = this.state;
            return (
                <Fragment>
                    <img 
                        id='before'
                        style={{
                            transitionDuration: before.duration + 's',
                            left: before.pos + 'px'
                        }}
                        src={this.getCardImg(imgList, before.pos, currentIndex)}
                    />
                    <img 
                        id='middle'
                        style={{
                            transitionDuration: middle.duration + 's',
                            left: middle.pos + 'px'
                        }}
                        src={this.getCardImg(imgList, middle.pos, currentIndex)}
                    />
                    <img 
                        id='after'
                        style={{
                            transitionDuration: after.duration + 's',
                            left: after.pos + 'px'
                        }}
                        src={this.getCardImg(imgList, after.pos, currentIndex)}
                    />
                </Fragment>
            )
        } else 
            return null;
    }

    getCardImg(imgList, pos, currentIndex) {
        // after
        if(pos === 625) {
            return (currentIndex+1)>=imgList.length? imgList[0]: imgList[currentIndex+1];
        }
        // middle
        if(pos === 0) {
            return imgList[currentIndex];
        }
        // before
        if(pos === -625) {
            return (currentIndex-1)<0 ? imgList[imgList.length-1] : imgList[currentIndex-1]
        }
    }

    render() {
        const imgList = this.props.imgList; // 使用PropType来限制输入格式
        return (
            <BannerWrapper 
                width={this.props.width}
                height={this.props.height}>
                {this.showBanner(imgList)}
                <BtnWrapper 
                    className='left-btn'
                    onClick={() => this.handleDirectionBtnClick(LEFT_Dir)}
                />
                <BtnWrapper 
                    className='right-btn'
                    onClick={() => this.handleDirectionBtnClick(RIGHT_Dir)}
                />
            </BannerWrapper>
        );
    }
}

export default Banner;