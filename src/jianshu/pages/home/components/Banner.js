import React, { Component } from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div `
    position: relative;
    width: 625px;
    height: 270px;
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
        ${'' /* transition: left 1s ease; */}
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
            before: -625,
            middle: 0,
            after: 625,
            currentIndex: 0,
            step: 0
        }
        this.interval = null;
        this.timer = null;
    }

    // direction: 表示Banner是向右或向左
    // AnimationCount: animation次数, -1表示infinite
    startBannerAnimation(direction, infinite) {
        switch(direction) {
            case LEFT_Dir: {
                this.setState({
                    beforeLeft: 0,
                    afterLeft: 625
                })
                if(infinite) {
                    this.animationInfinite(-625);
                } else {
                    this.step(-625);
                }
            }
            return;
            case RIGHT_Dir: {
                this.setState({
                    beforeLeft: 0,
                    afterLeft: -625
                })
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
            this.step(width);
        }, 3000)
    }

    step(width) { // -625  625
            const {beforeLeft, afterLeft} = this.state;
            console.log('before = ' + beforeLeft + ', after = ' + afterLeft);
            this.beforeImg.style.transitionDuration = '1s';
            this.afterImg.style.transitionDuration = '1s';
            this.setState({
                beforeLeft: beforeLeft + width,
                afterLeft: afterLeft + width
            });

            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                if(this.state.beforeLeft !== 0) {
                    this.beforeImg.style.transitionDuration = '0s';
                    this.setState({beforeLeft: (0 - width)});
                }
                
                if(this.state.afterLeft !== 0) {
                    this.afterImg.style.transitionDuration = '0s';
                    this.setState({afterLeft: (0 - width)});
                }
            }, 1000);
    }

    stopBannerAnimation() {
        this.interval && clearInterval(this.interval);
        this.interval = null;
        
        this.timer && clearTimeout(this.timer);
        this.timer = null;
    }

    componentDidMount() {
        // this.startBannerAnimation(LEFT_Dir, true);
        // this.startBannerAnimation(RIGHT_Dir, true);
    }

    componentWillUnmount() {
        this.stopBannerAnimation();
    }

    handleDirectionBtnClick(direction) {
        console.log('handleDirectionBtnClick, direction = ' + direction);
        this.stopBannerAnimation();
        const { before, middle, after, currentIndex } = this.state;
        const { imgList } = this.props;
        if(direction === LEFT_Dir) {
            const step = -625;
            this.setState({
                before: this.nextStep(before, step),
                middle: this.nextStep(middle, step),
                after: this.nextStep(after,step),
                currentIndex: currentIndex + 1 > imgList.length - 1 ? 0 : currentIndex + 1,
                step: step
            })
        } else if(direction === RIGHT_Dir) {
            const step = 625;
            this.setState({
                before: this.nextStep(before, step),
                middle: this.nextStep(middle, step),
                after: this.nextStep(after,step),
                currentIndex: currentIndex - 1 < 0 ? (imgList.length - 1) : currentIndex - 1,
                step: step
            })
        }
    }

    nextStepStyle(currentPos, step) {
        if(step && currentPos === step) 
            // return (0-step);
            return {
                left: 0 - step,
                duration: 0
            }
        else 
            // return (currentPos + step);
            return {
                left: currentPos + step,
                duration: 1
            }
    }

    nextStep(currentPos, step) {
        if(step && currentPos === step) 
            return (0-step);
            // return {
            //     left: 0 - step,
            //     duration: 0
            // }
        else 
            return (currentPos + step);
            // return {
            //     left: currentPos + step,
            //     duration: 1
            // }
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
                <div>
                    <img 
                        style={{
                            // transitionDuration: newBefore.duration + 's',
                            left: before + 'px',
                        }}
                        src={this.getCardImg(imgList, before, currentIndex)}
                    />
                    <img 
                        style={{
                            // transitionDuration: newMiddle.duration + 's',
                            left: middle + 'px',
                        }}
                        src={this.getCardImg(imgList, middle, currentIndex)}
                    />
                    <img 
                        style={{
                            // transitionDuration: newAfter.duration + 's',
                            left: after + 'px'
                        }}
                        src={this.getCardImg(imgList, after, currentIndex)}
                    />
                </div>
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
            <BannerWrapper>
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