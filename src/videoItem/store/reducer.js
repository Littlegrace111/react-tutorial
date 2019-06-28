const defaultState = {
    inputValue: '',
    list : []
}

// Redux 数据深拷贝，state immutable
export default (state = defaultState, action) => {
    console.log(state, action);
    if(action.type === 'change_input_value') {
        const newState = Object.assign({}, state); // ES6 深拷贝 assign
        newState.inputValue = action.value;
        return newState; // 新的数据返回给了store
    } else if (action.type === 'add_todo_item') {
        const newState = Object.assign({}, state);
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    } else if (action.type === 'delete_todo_item') {
        const newState = Object.assign({}, state);
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}