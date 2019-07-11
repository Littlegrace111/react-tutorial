import React, { Component } from 'react';
import styled from 'styled-components';

const WriterWrapper = styled.div `
    width: 280px;
    height: 440px
    border: solid #000 2px;
    margin-top: 20px;
`;

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>Writer</WriterWrapper>
        );
    }
}

export default Writer;