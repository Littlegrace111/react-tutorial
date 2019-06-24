import React, { Component, Fragment} from 'react';
// import './videoInfo.less'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        //数据存储
        this.state = {
            inputValue : '',
            list : []
        }
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
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                </div>
                <ul>
                    { 
                        this.state.list.map((item, index) => {
                            return <li key={index} 
                                       onClick={this.handleItemClick.bind(this, index)}
                                       dangerouslySetInnerHTML={{__html: item}}>
                                       {/**dangerouslySetInnerHTML  不转义html， 但是可能会存在xss攻击风险，
                                        如果有此需求，可以用dangerouslySetInnertHTML实现*/}
                                    </li>
                        })
                    }
                </ul>
            </Fragment>
        );
    }   

    handleInputChange(e) {
        console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        });
    }

    handleButtonClick(e) {
        // 1. react 改变数组需要深拷贝
        // 2. ES6 变量解构赋值,
        this.setState({
            list : [...this.state.list, this.state.inputValue], //生成一个新的list副本
            inputValue : ''
        })
    }

    handleItemClick(index) {
        const list = [...this.state.list]; // 变量解构赋值，深拷贝
        list.splice(index, 1);
        // React 改变数据思想：immutable，不能直接改变state里面的数据，改变state的数据副本，再赋值回state
        this.setState({
            list: list
        });
    }
}

export default TodoList