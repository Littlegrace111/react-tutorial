import React, { Component } from 'react';
import styled from 'styled-components';

const RecommendWrapper = styled.div`
    width: 280px;
    ${'' /* height: 228px; */}
    padding-bottom: 4px;
    border: solid #000 2px;

    .tips {
        width: 150px;
        height: 100px;
        background: #cccccc;
        border-radius: 8px;
        margin: 20px;
        ${'' /* position: relative 是必须的，否则三角形显示不出来 */}
        position: relative; 
    }

    .triangle_top:before {
        content: "";
        width: 0px;
        height: 0px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #cccccc;
        position: absolute;
        top: -10px;
        left: 15px;
    }

    .triangle_right:before {
        content: "";
        width: 0px;
        height: 0px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #cccccc;
        position: absolute;
        top: 40px;
        left: 150px;
    }

    .triangle_bottom:before{
        content: "";
        width: 0px;
        height: 0px;
        border-top: 10px solid #CCCCCC;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        position: absolute;
        top: 100px;
        left: 70px;
    }

    .triangle_left:before{
        content: "";
        width: 0px;
        height: 0px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #CCCCCC;
        position: absolute;
        top: 40px;
        left: -10px;
    }

    .rectangle {
        width: 150px;
        height: 100px;
        border: 1px solid #000000;
        border-radius: 8px;
        margin: 20px;
        position: relative;
    }

    .triangle_h_top:before {
        content: "";
        width: 0px;
        height: 0px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid #000;
        position: absolute;
        top: -15px;
        left: 65px;
    }

    .triangle_h_top:after {
        content: "";
        width: 0px;
        height: 0px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid #fff;
        position: absolute;
        top: -14px;
        left: 65px;
    }

    .triangle_h_right:before{
                content: "";
                width: 0px;
                height: 0px;
                border-top: 15px solid transparent;
                border-bottom: 15px solid transparent;
                border-left: 15px solid #000000;
                position: absolute;
                top: 39px;
                left: 150px;
            }
            .triangle_h_right:after{
                content: "";
                width: 0px;
                height: 0px;
                border-top: 14px solid transparent;
                border-bottom: 14px solid transparent;
                border-left: 14px solid #FFFFFF;
                position: absolute;
                top: 40px;
                left: 149px;
            }
            .triangle_h_bottom:before{
                content: "";
                width: 0px;
                height: 0px;
                border-top: 15px solid #000000;
                border-left: 15px solid transparent;
                border-right: 15px solid transparent;
                position: absolute;
                top: 101px;
                left: 69px;
            }
            .triangle_h_bottom:after{
                content: "";
                width: 0px;
                height: 0px;
                border-top: 14px solid #FFFFFF;
                border-left: 14px solid transparent;
                border-right: 14px solid transparent;
                position: absolute;
                top: 100px;
                left: 70px;
            }
            .triangle_h_left:before{
                content: "";
                width: 0px;
                height: 0px;
                border-top: 15px solid transparent;
                border-bottom: 15px solid transparent;
                border-right: 15px solid #000000;
                position: absolute;
                top: 40px;
                left: -15px;
            }
            .triangle_h_left:after{
                content: "";
                width: 0px;
                height: 0px;
                border-top: 14px solid transparent;
                border-bottom: 14px solid transparent;
                border-right: 14px solid #FFFFFF;
                position: absolute;
                top: 41px;
                left: -14px;
            }
`;

// 实心三角形实现：利用CSS中的伪元素(:before)实现，再利用border的transparent属性
// 空心三角形实现：在实心三角形的基础上，再加上伪元素(:after)实现。
// 伪元素(:before)实现的实心三角形与伪元素(:after)实现的实心三角形进行叠加，利用绝对定位的差值来实现空心三角形
class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {/* 实心三角形 */}
                <div className='triangle_top tips'></div>
                <div className='triangle_right tips'></div>
                <div className='triangle_bottom tips'></div>
                <div className='triangle_left tips'></div>

                {/* 空心三角形 */}
                <div className='triangle_h_top rectangle'></div>
                <div className='triangle_h_right rectangle'></div>
                <div className='triangle_h_bottom rectangle'></div>
                <div className='triangle_h_left rectangle'></div>
            </RecommendWrapper>
        );
    }
}

export default Recommend;