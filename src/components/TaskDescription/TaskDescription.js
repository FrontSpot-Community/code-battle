import React, {Component} from 'react';

export default class TaskDescription extends Component {
    render() {
        return (
            <div>
                {this.props.description}
            </div>
        );
    }
}
