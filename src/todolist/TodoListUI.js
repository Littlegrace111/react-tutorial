import React, { Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
// import store from './store';
// import * as actionCreator from './store/actionCreators';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initTodoListAction, getTodoListData} from './store/actionCreators';
import { connect } from 'react-redux';

class TodoListUI extends Component {
    constructor(props) {
        super(props);

        // 优化
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    // 在组件被挂载之后执行，只在组件挂载的时候执行，组件更新的时候不执行
    componentDidMount() {
        console.log('componentDidMount');        
        // store.dispatch(actionCreator.getTodoListData());
        this.props.getTodoListData();
    }

    render() {
        // console.log('render');
        const { inputValue, list } = this.props;
        return (
            <Fragment>
                <div>
                    <Input 
                        id="insertArea"
                        placeholder="todo info"
                        style={{width: '300px'}}
                        value={inputValue}
                        onChange={this.handleInputChange}
                    />
                    <Button onClick={this.handleButtonClick}
                        type='primary'> 
                        提交 
                    </Button>
                </div>
                <List
                    style={{width: '300px', marginTop: '10px'}}
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
                    )}
                />
            </Fragment>
        );
    }   

    handleInputChange(e) {
        const value = e.target.value;
        this.props.getInputChangeAction(value);
    }

    handleButtonClick(e) {
        this.props.getAddItemAction();
    }

    handleItemDelete(index) {
        this.props.getDeleteItemAction(index);
    }
}

const mapStateToProps = (state) => ({
    inputValue : state.inputValue,
    list : state.list
})

export default connect(
    mapStateToProps, 
    { // 把store的dispatch方法挂载到props上
        getInputChangeAction, 
        getAddItemAction, 
        getDeleteItemAction, 
        initTodoListAction,
        getTodoListData
    }
    )(TodoListUI);

// export default TodoListUI;