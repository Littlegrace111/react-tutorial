import React, { Component } from 'react';
import styled from 'styled-components';
import SpriteView from '../../../common/spriteAnimationView'

const WriterWrapper = styled.div `
    width: 280px;
    height: 440px
    border: solid #000 2px;
    margin-top: 20px;
`;

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <SpriteView 
                    frameWidth={138}
                    frameHeight={160}
                    direction={1}
                    frameCount={7}
                    frameImg={'https://img.alicdn.com/tfs/TB1uzExbO_1gK0jSZFqXXcpaXXa-969-160.png'}
                />
            </WriterWrapper>
        );
    }
}

export default Writer;