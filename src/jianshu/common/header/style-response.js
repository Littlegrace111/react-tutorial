import styled from 'styled-components';
import logoPic from '../../statics/jianshu-logo.png';

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    height : 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    z-index: 100;
    background: #fff;
`;

export const Logo = styled.a`
    ${'' /* position: absolute;
    top: 0;
    left: 0;
    display: block; */}
    width: 50px;
    height: 45px;
    ${'' /* background: url('https://img.alicdn.com/tfs/TB1_NKXpQvoK1RjSZFwXXciCFXa-256-228.png');
    background-size: 100%;
    background-position: center; */}
    padding: 0 20px;

    img {
        width: 50px;
        height: 45px;
    }
`;

// 使用flex
// export const Nav = styled.div`
//     max-width: 960px;
//     ${'' /* min-width: 500px; */}
//     display: flex;
//     justify-content: space-between;
//     height: 100%;
//     margin: 0 auto;
//     ${'' /* margin: 0 auto; */}
//     box-sizing: border-box;
//     ${'' /* background: grey; */}
// `;

export const Nav = styled.div`
    max-width: 960px;
    width: 800px;
    height: 100%;
    margin: 0 auto;
    ${'' /* min-width: 500px; */}
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-items: center;
    
    ${'' /* margin: 0 auto; */}
    ${'' /* box-sizing: border-box; */}
    ${'' /* background: grey; */}
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 20px;
    color: #333;
    ${'' /* &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    } */}
`;

export const SearchWrapper = styled.div`
    position: absolute;
    right: 0px;
    ${'' /* width: 240px; */}
    ${'' /* float: left; */}
    padding: 0 20px;
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
    z-index: 101;

    &:before {
        content: "";
        width: 0px;
        height: 0px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
        position: absolute;
        top: -10px;
        left: 15px;
    }
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
    ${'' /* position: absolute;
    top: 0;
    right: 0; */}
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