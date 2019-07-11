import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        // 在初始化bind this，性能优化
        this.handleClick = this.handleClick.bind(this);
    }

    // 性能优化：减少子组件不必要的更新
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
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

//做属性校验, isRequired 不允许为空
TodoItem.propTypes = {
    content : PropTypes.string.isRequired,
    deleteItem : PropTypes.func,
    index : PropTypes.number
}

TodoItem.defaultProps = {

}

export default TodoItem;