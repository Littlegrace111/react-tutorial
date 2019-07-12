import { fromJS } from 'immutable';
import { constants } from '../store';

const defaultState = fromJS({
    page: 1,
    totalPage: 1,
    articleList: []
});

export default (state = defaultState, action) => {
    console.log(action);
    switch(action.type) {
        case constants.SET_ARTICLE_LIST: {
            const newState = state.merge({
                articleList: fromJS(state.get('articleList').concat(action.data.pageList)),
                page: action.page,
                totalPage: action.data.totalPage
            });
            return newState;
        }
    }
    return state;
}