import * as constant from './constants';
import { fromJS } from 'immutable';

// const defaultState = {
//     focused: false,
// };

// 通过immutable把一个JS对象变成一个immutable对象
const defaultState = fromJS({
    focused: false,
    list: [],
    searchTipsMouseEnter: false,
    page: 1,
    totalPage: 1,
    changeClicked: false
});

export default (state = defaultState, action) => {
    // console.log(action);
    switch(action.type) {
        case constant.SEARCH_FOCUS:
            return state.set('focused', true);
        case constant.SEARCH_BLUR:
            return state.set('focused', false);
        case constant.GET_SEARCH_LIST:
            const newState = state.merge({
                list: action.data,
                totalPage: Math.ceil(action.data.length/10)
            });
            return newState;
        case constant.SEARCH_TIPS_ENTER:
            return state.set('searchTipsMouseEnter', true);
        case constant.SEARCH_TIPS_LEAVE:
            return state.set('searchTipsMouseEnter', false);
        case constant.CHANGE_PAGE_LIST: {
            const page = state.get('page');
            const totalPage = state.get('totalPage');
            if(page < totalPage) {
                return state.set('page', (page+1));
            } else {
                return state.set('page', 1);
            }
        }
        default:
            return state;
    }
}