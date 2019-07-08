import React, { Component } from 'react';
import * as Head from './style';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
        return (
            <Head.HeaderWrapper>
                <Head.Logo href='/' />
                <Head.Nav>
                    <Head.NavItem className='left'>首页</Head.NavItem>
                    <Head.NavItem className='left'>下载App</Head.NavItem>
                    <Head.SearchWrapper>
                        <Head.NavSearch 
                            placeholder='搜索' 
                            className={this.state.focused ? 'focused' : ''}
                            onFocus={this.handleInputFocus}
                            onBlur={this.handleInputBlur}>
                        </Head.NavSearch>
                        <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe63d;</span>
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

    handleInputFocus(e) {
        this.setState({focused: true});
    }

    handleInputBlur(e) {
        this.setState({focused: false});
    }
}

export default Header;