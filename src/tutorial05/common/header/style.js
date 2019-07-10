import styled from 'styled-components';
import logoPic from '../../statics/jianshu-logo.png';

export const HeaderWrapper = styled.div`
    height : 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 900px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding-right: 100px;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
`

export const SearchInputWrapper = styled.div`
    position: relative;
    ${'' /* float: left; */}
    .iconfont {
        position: absolute;
        right: 6px;
        top: 13px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        color: #999;

        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    margin-left: 20px;
    background: #eee;
    font-size: 14px;
    color: #666;
    transition: width 0.2s ease-out;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
        transition: width 0.2s ease-out;
    }
`;

export const SearchTipsWrapper = styled.div `
    position: absolute;
    left: 20px;
    margin-top: 9px;
    padding: 20px 20px 10px 20px;
    width: 250px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0, .2);
    border-radius: 4px;
`;

export const SearchTipsTitle = styled.div `
    font-size: 14px;
    color: #969696;
    margin-bottom: 10px;

    a {
        float: right;
        cursor: pointer;

        &:hover {
            color: #000;
        }

        .iconfont {
            display: inline-block;
            font-size: 13px;
            line-height: 1;
            transition: all .5s ease;
            margin-right: 2px;
        }
    }
`;

export const SearchTipsList = styled.ul `
    ${'' /* background: blue; */}
`;

export const SearchTipItem = styled.li `
    display: inline-block;
    line-height: 28px;
    margin-right: 10px;
    
    a {
        padding: 2px 6px;
        font-size: 13px;
        color: #787878;
        border: 1px solid #ddd;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            color: #000;
        }
    }
`;

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    border: 1px solid #ea6f5a;
    line-height: 38px;
    outline: none;
    border-radius: 19px;
    font-size: 14px;
    &.writing {
        color: white;
        background: #ea6f5a;
        .iconfont {
            font-size: 14px;
        }
    }
    &.register {
        color: #ea6f5a;
    }
`;