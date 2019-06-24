import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        // 在初始化bind this，性能优化
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const content = this.props.content;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick() {
        // console.log(this.props.index);
        const { deleteItem, index } = this.props; // 解构赋值
        deleteItem(index);
    }
}

export default TodoItem;