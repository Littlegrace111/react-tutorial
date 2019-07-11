import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Head from './style';
import { actionCreator } from './store';

class Header extends Component {
    render() {
        const props = this.props;
        return (
            <Head.HeaderWrapper>
                <Head.Logo href='/' />
                <Head.Nav>
                    <Head.NavItem className='left'>首页</Head.NavItem>
                    <Head.NavItem className='left'>下载App</Head.NavItem>
                    <Head.SearchWrapper>
                        <Head.SearchInputWrapper>
                            <Head.NavSearch
                                placeholder='搜索'
                                className={props.focused ? 'focused' : ''}
                                onFocus={() => props.handleInputFocus(this.props.list)}
                                onBlur={props.handleInputBlur}>
                            </Head.NavSearch>
                            <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe63d;</span>
                        </Head.SearchInputWrapper>
                        {this.getSearchTipsInfo(props.focused)}
                    </Head.SearchWrapper>
                    <Head.NavItem className='right'>登录</Head.NavItem>
                    <Head.NavItem className='right'>
                        <div className='iconfont'>&#xe636;</div>
                    </Head.NavItem>
                </Head.Nav>
                <Head.Addition>
                    <Head.Button className='writing'>
                        <span className='iconfont'>&#xe601;</span>
                        写文章
                        </Head.Button>
                    <Head.Button className='register'>注册</Head.Button>
                </Head.Addition>
            </Head.HeaderWrapper>
        );
    }

    getSearchTipsInfo(focused) {
        const { list, page, totalPage } = this.props;
        let pageList = [];
        if(page < totalPage) {
            pageList = list.slice((page-1)*10, page*10);
        } else {
            pageList = list.slice((page-1)*10, list.length);
        }
        
        if (focused || this.props.searchTipsMouseEnter) {
            return (
                <Head.SearchTipsWrapper 
                    onMouseEnter={this.props.handleSearchTipsMouseEnter}
                    onMouseLeave={this.props.handleSearchTipsMouseLeave}
                    >
                    <Head.SearchTipsTitle>
                        <span>热门搜索</span>
                        <a onClick={() => {this.props.changePageList(this.spinCoin);}}>
                            <i ref={(icon) => {this.spinCoin = icon;}} className='iconfont'>&#xe851;</i>
                            换一批
                        </a>
                    </Head.SearchTipsTitle>
                    <Head.SearchTipsList>
                        {pageList.map((item) => {
                            return(<Head.SearchTipItem key={item}><a>{item}</a></Head.SearchTipItem>);
                        })}
                    </Head.SearchTipsList>
                </Head.SearchTipsWrapper>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        searchTipsMouseEnter: state.get('header').get('searchTipsMouseEnter'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            dispatch(actionCreator.searchInputFocus(true));
            (list.size === 0) && dispatch(actionCreator.getSearchList());  
        },
        handleInputBlur() {
            dispatch(actionCreator.searchInputBlur(false));
        },
        handleSearchTipsMouseEnter() {
            dispatch(actionCreator.searchTipsMouseEnter());
        },
        handleSearchTipsMouseLeave() {
            dispatch(actionCreator.searchTipsMouseLeave());
        },
        changePageList(spinCoin) {
            let originAngle = spinCoin.style.transform;
            if(originAngle) {
                originAngle = parseInt(originAngle.replace(/[^0-9]/ig, ''));
            } else {
                originAngle = 0;
            }
            spinCoin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            dispatch(actionCreator.changePage());
        }, 
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);