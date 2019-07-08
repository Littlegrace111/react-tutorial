import * as constant from './constants';

const defaultState = {
    focused: false,
};

export default (state = defaultState, action) => {
    // console.log(action);
    if(action.type === constant.SEARCH_FOCUS) {
        return {focused : action.focused};
    } else if(action.type === constant.SEARCH_BLUR) {
        return {focused : action.focused};
    }
    return state;
}