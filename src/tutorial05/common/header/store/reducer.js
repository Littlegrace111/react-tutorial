import * as constant from './constants';
import { fromJS } from 'immutable';

// const defaultState = {
//     focused: false,
// };

// 通过immutable把一个JS对象变成一个immutable对象
const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    // console.log(action);
    if(action.type === constant.SEARCH_FOCUS) {
        // return {focused : action.focused};
        return state.set('focused', true);
    } else if(action.type === constant.SEARCH_BLUR) {
        // return {focused : action.focused};
        return state.set('focused', false);
    }
    return state;
}