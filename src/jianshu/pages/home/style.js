import styled from 'styled-components';

export const Container = styled.div `
    margin-top: 90px;
    margin-left:  auto;
    margin-right: auto;
    width: 100%;
    padding: 0px 15px;
    box-sizing: border-box;
    overflow: hidden;
`;

export const LeftWrapper = styled.div `
    ${'' /* float: left; */}
    max-width: 960px;
    font-size: 24px;
    margin: 0 auto;

    >.title {
        padding: 20px 0px;
        text-align: center;
    }
`;

export const RightWrapper = styled.div `
    float: right;
    width: 280px;
    height: 600px;
`;

export const BannerWrappre = styled.div `
    position: relative;
    width: 625px;
    height: 270px;
    margin: 0 auto;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
`;

export const BoardWrapper = styled.div `
    
`;

export const LoadMoreBtn = styled.div `
    witdh: 100%;
    height: 40px;
    background-color: #a5a5a5;
    margin: 30px auto 60px;
    border-radius: 20px;
    font-size: 15px;
    text-align: center;
    color: #fff;
    padding: 10px 15px;
    box-sizing: border-box;
    cursor: pointer;
`;