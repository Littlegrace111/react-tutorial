import * as constant from './constants';
import axios from 'axios';

const setSearchListData = (data) => ({
    type: constant.GET_SEARCH_LIST,
    data
});

export const searchInputFocus = (focused) => ({
    type: constant.SEARCH_FOCUS,
    focused
});

// 同步：action 返回一个对象
export const searchInputBlur = (focused) => ({
    type: constant.SEARCH_BLUR,
    focused
});

export const changePage = () => ({
    type: constant.CHANGE_PAGE_LIST
});

// 异步：action 返回一个函数
export const getSearchList = () => {
    return (dispatch) => {
        console.log('getSearchList');
        axios.get('/api/searchInfo.json').then((res) => {
            console.log(res.data);
            const data = res.data;
            dispatch(setSearchListData(data.data));
        }).catch((e) => {
            alert('error');
        });
    }
};

export const searchTipsMouseEnter = () => ({
    type: constant.SEARCH_TIPS_ENTER
});

export const searchTipsMouseLeave = () => ({
    type: constant.SEARCH_TIPS_LEAVE
});