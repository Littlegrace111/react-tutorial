import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Head from './style';
import { actionCreator } from './store';

const Header = (props) => {
    return (
        <Head.HeaderWrapper>
            <Head.Logo href='/' />
            <Head.Nav>
                <Head.NavItem className='left'>首页</Head.NavItem>
                <Head.NavItem className='left'>下载App</Head.NavItem>
                <Head.SearchWrapper>
                    <Head.NavSearch
                        placeholder='搜索'
                        className={props.focused ? 'focused' : ''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInputBlur}>
                    </Head.NavSearch>
                    <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe63d;</span>
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

const mapStateToProps = (state) => {
    return {
        // focused: state.header.focused
        // header 变成immutable对象
        // focused: state.header.get('focused')
        focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            // const action = {
            //     type: 'search_focused',
            //     focused: true
            // };
            dispatch(actionCreator.searchInputFocus(true));
        },
        handleInputBlur() {
            // const action = {
            //     type: 'search_blur',
            //     focused: false
            // };
            dispatch(actionCreator.searchInputBlur(false));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);