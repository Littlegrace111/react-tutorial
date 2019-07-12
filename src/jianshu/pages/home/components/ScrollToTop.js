import React, { Component } from 'react';
import styled from 'styled-components';

const BackToTopBtn = styled.div `
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 52px;
    height: 52px;
    border: solid 1px #dcdcdc;
    background: #fff;
    padding: 20px 0;
    box-sizing: border-box;

    .backtop {
        font-size: 16px;
        text-align: center;
        &:before{
            content: "\\e684";
        }

    }
`;

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.handleBackToTop = this.handleBackToTop.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        if(this.state.show) {
            return (
                <BackToTopBtn 
                        onClick={this.handleBackToTop}>
                        <div className='backtop'></div>
                </BackToTopBtn>
            );
        } else 
            return null;  
    }

    handleBackToTop() {
        this.scrollToTopLinear(200); // 线性动画
        // this.scrollToTopEase(200); // ease in and out
    }

    scrollToTopLinear(scrollDuration) { 
        const scrollStep = -window.scrollY / (scrollDuration / 20);
        console.log('scrollStep = ' + scrollStep);
        const scrollInterval = setInterval( () => {
            console.log('Y = ' + window.scrollY);
            if(window.scrollY !== 0) {
                window.scrollBy(0, scrollStep); // scrollTo(x, y)是一步到位，scrollBy(x, y)是逐步累加
            } else {
                clearInterval(scrollInterval);
            }
        }, 20);
    }

    // 这个函数实现的有bug，需要再调试
    // scrollToTopEase(scrollDuration) {
    //     const scrollHeight = window.scrollY,
    //           scrollStep = Math.PI / (scrollDuration / 15),
    //           cosParameter = scrollHeight / 2;
    //     let scrollCount = 0,
    //         scrollMargin,
    //         scrollInterval = setInterval(() => {
    //             if(window.scrollY !== 0) {
    //                 scrollCount = scrollCount + 1;
    //                 scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep);
    //                 window.scrollTo(0, (scrollHeight - scrollMargin));
    //             } else {
    //                 clearInterval(scrollInterval);
    //             }
    //         }, 15);      
    // }


    /* 
        Explanations:
        - pi is the length/end point of the cosinus intervall (see above)
        - newTimestamp indicates the current time when callbacks queued by requestAnimationFrame begin to fire.
          (for more information see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
        - newTimestamp - oldTimestamp equals the duration
    
          a * cos (bx + c) + d                      | c translates along the x axis = 0
        = a * cos (bx) + d                          | d translates along the y axis = 1 -> only positive y values
        = a * cos (bx) + 1                          | a stretches along the y axis = cosParameter = window.scrollY / 2
        = cosParameter + cosParameter * (cos bx)    | b stretches along the x axis = scrollCount = Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
        = cosParameter + cosParameter * (cos scrollCount * x)
    */
    scrollToTopEase(scrollDuration) {
        var cosParameter = window.scrollY / 2,
            scrollCount = 0,
            oldTimestamp = performance.now();
        function step (newTimestamp) {
            scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
            if (scrollCount >= Math.PI) window.scrollTo(0, 0);
            if (window.scrollY === 0) return;
            window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }
    
    // 此函数可以通过debounse 优化
    handleScroll() {
        // console.log(window.innerHeight);
        // console.log(window.scrollY);
        if(window.scrollY > window.innerHeight) {
            this.setState({show: true});
        } else {
            this.setState({show: false});
        }
    }
}

export default ScrollToTop;