import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem';
// import axios from 'axios';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
//import * as actionTypes from './store/actionTypes';
import * as actionCreator from './store/actionCreators';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
        // 数据存储
        // this.state = {
        //     inputValue : '',
        //     list : []
        // }

        // 使用Redux存储数据
        this.state = store.getState();

        // 优化
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);

        store.subscribe(this.handleStoreChange); //订阅store的变化
    }

    // 在组件即将被挂载到页面的时候回调执行，只在组件挂载的时候执行，组件更新的时候不执行
    componentWillMount() {
        console.log('componentWillMount');
    }

    // 在组件被挂载之后执行，只在组件挂载的时候执行，组件更新的时候不执行
    componentDidMount() {
        console.log('componentDidMount');
        //在此请求网络数据
        // axios.get('/api/todolist')
        //     .then((res) => {
        //         console.log(res);
        //         const data = res.data;
        //         store.dispatch(actionCreator.initTodoListAction(data));
        //     }).catch((e) => {
        //         alert('error');
        //     });
        
        store.dispatch(actionCreator.getTodoListData());
    }

    // 在组件被更新之前执行，用于判断组件是否需要更新，return true 表示要更新，return false表示不要更新
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    // 组件被更新之前执行，在shouldComponentUpdate之后执行
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    render() {
        console.log('render');
        return (
            <Fragment>
                {/** 采用Fragment占位符 提到顶层div，减少一层div，更加灵活 */}
                <div>
                {/** JSX语法嵌入js采用{} */}
                    {/**label标签for属性要重命名成htmlFor */}
                    {/** <label htmlFor='insertArea'>输入内容</label> */}
                    <Input 
                        placeholder="todo info"
                        style={{width: '300px'}}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <Button onClick={this.handleButtonClick}type='primary'> 提交 
                    </Button>
                </div>
                <List
                    style={{width: '300px', marginTop: '10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
                    )}
                />
                {/**
                    <ul>
                        { this.getTodoItem() }
                    </ul>
                 */}
            </Fragment>
        );
    }   

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <Fragment key={index}>
                    <TodoItem 
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                    {/** dangerouslySetInnerHTML  不转义html， 但是可能会存在xss攻击风险，
                            如果有此需求，可以用dangerouslySetInnertHTML实现 */}
                    {/** <li key={index} 
                        onClick={this.handleItemClick.bind(this, index)}
                        dangerouslySetInnerHTML={{__html: item}}>
                        </li> */}
                </Fragment>
            )
        })
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleInputChange(e) {
        // console.log(e.target.value);
        const value = e.target.value;
        // 新版写法: setState 可以接收一个函数，变成异步setState，可以提升性能
        // this.setState(() => ({inputValue : value}));
        // this.setState({
        //     inputValue: e.target.value
        // });

        //Redux
        // const action = {
        //     type : actionTypes.CHANGE_INPUT_VALUE,
        //     value : e.target.value
        // };

        // 把action传递给store
        // store 会把新的数据转发给reducer， Redux框架接收到新的数据会通过store转发给reducer
        store.dispatch(actionCreator.getInputChangeAction(value));
    }

    handleButtonClick(e) {
        // 优化异步setState写法
        this.setState((prevState) => ({
            list : [...prevState.list, prevState.inputValue],
            inputValue : ''
        }))

        // 1. react 改变数组需要深拷贝
        // 2. ES6 变量解构赋值,
        // this.setState({
        //     list : [...this.state.list, this.state.inputValue], //生成一个新的list副本
        //     inputValue : ''
        // })

        // Redux
        // const action = {
        //     type : actionTypes.ADD_TODO_ITEM, //type字段是action必须的
        // }
        store.dispatch(actionCreator.getAddItemAction());
    }

    handleItemClick(index) {
        this.handleItemDelete(index);
    }

    handleItemDelete(index) {
        // 优化写法
        // this.setState(() => {
        //     const list = [...prevState.list];
        //     list.splice(index, 1);
        //     return {list}; //在react中，{list : list} 可以直接写成{list}
        // });
        // const list = [...this.state.list]; // 变量解构赋值，深拷贝
        // list.splice(index, 1);
        // // React 改变数据思想：immutable，不能直接改变state里面的数据，改变state的数据副本，再赋值回state
        // this.setState({
        //     list: list
        // });

        // Redux
        // const action = {
        //     type : actionTypes.DELETE_TODO_ITEM,
        //     index: index
        // }
        store.dispatch(actionCreator.getDeleteItemAction(index));
    }

}

export default TodoList;