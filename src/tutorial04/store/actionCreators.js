// 创建actionCreator的原因就是为了方便进行自动化单元测试
// 同时方便维护管理代码
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: actionTypes.CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: actionTypes.ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: actionTypes.DELETE_TODO_ITEM,
    index
});

export const initTodoListAction = (data) => ({
    type: actionTypes.INIT_TODO_LIST,
    data
});

export const getTodoListData = () => {
    return (dispatch) => { // 为什么会接收到dispatch这个函数呢？？？
        axios.get('/api/todolist').then((res) => {
            console.log(res.data);
            const data = res.data;
            dispatch(initTodoListAction(data));
        }).catch((e) => {
            alert('error');
        });
    }
}