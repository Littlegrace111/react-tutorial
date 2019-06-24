import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div onClick={this.handleItemClick.bind(this)}>
                {this.props.content}
            </div>
        )
    }

    handleItemClick() {
        console.log(this.props.index);
        this.props.deleteItem(this.props.index);
    }
}

export default TodoItem;