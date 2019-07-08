const defaultState = {
    focused: false,
};

export default (state = defaultState, action) => {
    console.log(action);
    if(action.type === 'search_focused') {
        return {focused : action.focused};
    } else if(action.type === 'search_blur') {
        return {focused : action.focused};
    }
    return state;
}