import React, { Component } from 'react';
import styled from 'styled-components';

const TopicListWrapper = styled.div`
    max-width: 960px;
    width: 800px;
    height: 600px;
    border: solid 2px #000;
    border-radius: 10px;
    margin: 0 auto;
    overflow: scroll;
`

const TopicListUl = styled.ul`
    width: 100%;
    ${'' /* max-height: 3500px; */}
    box-sizing: border-box;
    ${'' /* margin-top: 30px; */}
    padding: 10px;
`;

const ListItem = styled.li`
    position: relative;
    width: 100%;
    height: 140px;
    padding: 15px 0;
    box-sizing: border-box;
    margin-bottom: 15px;
    border-bottom: solid 1px #f0f0f0;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    &.have-img {
        padding-right: 165px;
    }

    .title {
        display: block;
        color: #969696;
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }

    .abstract {
        color: #999;
        font-size: 13px;
        margin-bottom: 8px;
        line-height: 24px;
    }

    .info {
        color: #999;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }
`;

const ContentLink = styled.a`
    display: block;
    width: 150px;
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -50px;

    img {
        width: 100%;
        border-radius: 4px;
    }
`;

class TopicList extends Component {
    render() {
        const { list } = this.props;
        // console.log('render');
        // console.log(list);
        if (list) {
            return (
                <TopicListWrapper>
                    <TopicListUl>
                        {
                            list.map((item, index) => {
                                return (
                                    <ListItem key={index}>
                                        <Content className='have-img'>
                                            <a className='title'>{item.title}</a>
                                            <p className='abstract'>{item.abstract}</p>
                                            <div className='info'>
                                                <a className='nickname'>{item.nickname}</a>
                                                <span>{item.comments}</span>
                                                <span>{item.likecount}</span>
                                            </div>
                                        </Content>
                                        <ContentLink>
                                            <img src={item.imgPic}></img>
                                        </ContentLink>
                                    </ListItem>
                                );
                            })
                        }
                    </TopicListUl>
                </TopicListWrapper>
            );
        } else {
            return null;
        }

    }
}

export default TopicList;