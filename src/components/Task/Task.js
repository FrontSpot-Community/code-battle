import React, {Component} from 'react';
import {

} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Task extends Component {
    render() {
        return (
            <section>
                <h1>
                  <Link to={`/battle/${this.props.battle}/${this.props.taskId}`}>
                    {this.props.taskTitle}
                  </Link>
                </h1>
            </section>
        );
    }
}
