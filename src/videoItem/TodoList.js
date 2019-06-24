import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem';
// import './videoInfo.less'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        //数据存储
        this.state = {
            inputValue : '',
            list : []
        }

        // 优化
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                {/** 采用Fragment占位符 提到顶层div，减少一层div，更加灵活 */}
                <div>
                {/** JSX语法嵌入js采用{} */}
                    <label htmlFor='insertArea'>输入内容</label> {/**label标签for属性要重命名成htmlFor */}
                    <input 
                        id="insertArea"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    { this.getTodoItem() }
                </ul>
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

    handleInputChange(e) {
        // console.log(e.target.value);
        const value = e.target.value;
        // 新版写法: setState 可以接收一个函数，变成异步setState，可以提升性能
        this.setState(() => (inputValue : value));

        // this.setState({
        //     inputValue: e.target.value
        // });
    }

    handleButtonClick(e) {
        // 优化异步setState写法
        this.steState((prevState) => ({
            list : [...prevState.list, prevState.inputValue],
            inputValue : ''
        }))

        // 1. react 改变数组需要深拷贝
        // 2. ES6 变量解构赋值,
        // this.setState({
        //     list : [...this.state.list, this.state.inputValue], //生成一个新的list副本
        //     inputValue : ''
        // })
    }

    handleItemClick(index) {
        this.handleItemDelete(index);
    }

    handleItemDelete(index) {
        // 优化写法
        this.setState(() => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}; //在react中，{list : list} 可以直接写成{list}
        });
        // const list = [...this.state.list]; // 变量解构赋值，深拷贝
        // list.splice(index, 1);
        // // React 改变数据思想：immutable，不能直接改变state里面的数据，改变state的数据副本，再赋值回state
        // this.setState({
        //     list: list
        // });
    }

}

export default TodoList