import React, { Component } from 'react';
import styled from 'styled-components';

const RecommendWrapper = styled.div `
    width: 280px;
    height: 228px;
    padding-bottom: 4px;
    border: solid #000 2px;
`;

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>recommend</RecommendWrapper>
        );
    }
}

export default Recommend;