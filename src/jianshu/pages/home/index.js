import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recommend from './components/Recommend';
import TopicList from './components/TopicList';
import Writer from './components/Writer';
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
        return (
            <HomeStyle.Container>
                <HomeStyle.LeftWrapper>
                    <HomeStyle.BannerWrappre>
                        <img className='banner' src='https://hbimg.huabanimg.com/fc6310d52a0a5f4a54ea41e437bffb8a72d0d3de15452-fxES2K_fw658'></img>
                        <img className='banner' src='https://hbimg.huabanimg.com/352c82cf19f60362b0721acf9c97c396a1987bdd945c-87WRHX_fw658'></img>
                    </HomeStyle.BannerWrappre>
                    <TopicList list = {list}/>
                    {this.showLoadMoreBtn(page, totalPage)}
                </HomeStyle.LeftWrapper>
                <HomeStyle.RightWrapper>
                    <Recommend />
                    <Writer />
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