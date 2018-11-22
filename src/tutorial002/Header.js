import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.props.changeTitle(event.target.value);
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <input value={this.props.title}
                    onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}

export default Header