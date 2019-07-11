import React, { Component } from 'react';
import Recommend from './components/Recommend';
import TopicList from './components/TopicList';
import Writer from './components/Writer';
import * as HomeStyle from './style';

class Home extends Component {
    render() {
        return (
            <HomeStyle.Container>
                <HomeStyle.LeftWrapper>
                    <HomeStyle.BannerWrappre>
                        <img className='banner' src={require('../../statics/banner2.jpg')}></img>
                        <img className='banner' src={require('../../statics/banner3.png')}></img>
                    </HomeStyle.BannerWrappre>
                    <TopicList />
                </HomeStyle.LeftWrapper>
                <HomeStyle.RightWrapper>
                    <Recommend />
                    <Writer />
                </HomeStyle.RightWrapper>
            </HomeStyle.Container>
        );
    }
}

export default Home;