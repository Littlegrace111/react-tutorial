import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recommend from './components/Recommend';
import TopicList from './components/TopicList';
import Writer from './components/Writer';
import Banner from './components/Banner'
import * as HomeStyle from './style';
import { actionCreator } from './store';
import ScrollToTop from './components/ScrollToTop';

class Home extends Component {
    componentDidMount() {
        this.props.getArticleList(this.props.page);
    }

    showLoadMoreBtn(page, totalPage) {
        if(page < totalPage) {
            return (
                <HomeStyle.LoadMoreBtn
                    onClick={() => {this.props.LoadMoreArticle(page, totalPage)}}>
                    阅读更多
                </HomeStyle.LoadMoreBtn>
            )
        } else {
            return null;
        }
    }

    render() {
        const { list, page, totalPage } = this.props;
        const imgList = [
            'https://img.alicdn.com/tfs/TB1XpR6bVT7gK0jSZFpXXaTkpXa-1280-720.png',
            'https://img.alicdn.com/tfs/TB1f3x.b7L0gK0jSZFAXXcA9pXa-2560-1440.png',
            'https://img.alicdn.com/tfs/TB1ZeSibW61gK0jSZFlXXXDKFXa-4096-2304.jpg',
            // 'https://img.alicdn.com/tfs/TB103XYvuSSBuNjy0FlXXbBpVXa-751-627.png'
        ]
        return (
            <HomeStyle.Container>
                <HomeStyle.LeftWrapper>
                    <div className='title'>画廊组件</div>
                    <Banner 
                        width={800}
                        height={500}
                        imgList={imgList} 
                        />
                    <div className='title'>List分页滚动组件</div>
                    <TopicList list = {list}/>
                    {this.showLoadMoreBtn(page, totalPage)}
                    
                    
                    <div className="title"></div>

                    <div className='title'>字体颜色渐变</div>

                </HomeStyle.LeftWrapper>
                <HomeStyle.RightWrapper>
                    {/* <Recommend />
                    <Writer /> */}
                </HomeStyle.RightWrapper>
                <ScrollToTop />
            </HomeStyle.Container>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.get('home').get('page'),
    totalPage: state.get('home').get('totalPage'),
    list: state.get('home').get('articleList')
});

const mapDispatchToProps = (dispatch) => {
    return {
        getArticleList(page) {
            console.log(page);
            dispatch(actionCreator.getArticleList(page));
        },
        LoadMoreArticle(page, totalPage) {
            console.log('LoadMoreArticle');
            if(page < totalPage) {
                const currentPage = page + 1;
                dispatch(actionCreator.getArticleList(currentPage));
            } else {

            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);