import axios from 'axios';
import { constants } from '../store';

const setArticleListData = (data, currentPage) => ({
    type: constants.SET_ARTICLE_LIST,
    page: currentPage,
    data
});

// 异步：action 返回一个函数
export const getArticleList = (page) => {
    return (dispatch) => {
        console.log('getArticleList, page = ' + page);
        axios.get('/api/articles.json?page=' + page).then((res) => {
            console.log('getArticleList');
            const data = res.data;
            dispatch(setArticleListData(data.data, page));
        }).catch((e) => {
            console.log(e);
        });
    }
};