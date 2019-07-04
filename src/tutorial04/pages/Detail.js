import React, { Component }from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'grace'}
    }

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}

export default Detail;