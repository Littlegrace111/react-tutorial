import * as actionType from './actionTypes';

const defaultState = {
    inputValue: '',
    list : []
}

// Redux 数据深拷贝，state immutable
export default (state = defaultState, action) => {
    console.log(state, action);
    if(action.type === actionType.CHANGE_INPUT_VALUE) {
        const newState = Object.assign({}, state); // ES6 深拷贝 assign
        newState.inputValue = action.value;
        return newState; // 新的数据返回给了store
    } else if (action.type === actionType.ADD_TODO_ITEM) { 
        const newState = Object.assign({}, state);
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    } else if (action.type === actionType.DELETE_TODO_ITEM) {
        const newState = Object.assign({}, state);
        newState.list.splice(action.index, 1);
        return newState;
    } else if (action.type === actionType.INIT_TODO_LIST) {
        const newState = Object.assign({}, state);
        newState.list = action.data;
        return newState;
    }
    return state;
}