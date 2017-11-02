import React, {Component} from 'react';
import {

} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import styles from './task.scss';

export default class Task extends Component {
    render() {
        const {task} = styles;

        return (

            <section className={task}>
                <h1>
                  <Link to={`/battle/${this.props.battle}/${this.props.taskId}`}>
                    {this.props.taskTitle}
                  </Link>
                </h1>
            </section>


        );
    }
}
