import React, {Component} from 'react';
import {

} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Task extends Component {
    render() {
        const {tournament, taskId} = this.props;
        return (
            <section>
                <h1>
                  <Link to={`/tournament/${tournament}/${taskId}`}>
                    {this.props.taskTitle}
                  </Link>
                </h1>
            </section>
        );
    }
}
