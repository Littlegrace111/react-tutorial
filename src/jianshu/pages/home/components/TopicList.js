import React, { Component } from 'react';
import styled from 'styled-components';

const TopicListWrapper = styled.div `
    width: 100%;
    height: 3500px;
    border: solid #000 2px;
    box-sizing: border-box;
    margin-top: 30px;
`;

class TopicList extends Component {
    render() {
        return (
            <TopicListWrapper>TopicList</TopicListWrapper>
        );
    }
}

export default TopicList;