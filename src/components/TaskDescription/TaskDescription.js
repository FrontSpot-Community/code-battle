import React, {Component} from 'react';
import style from './taskDescription.scss';

export default class TaskDescription extends Component {
    render() {
        return (
            <div className={style.descriptionContainer}>
                {this.props.description}
            </div>
        );
    }
}
