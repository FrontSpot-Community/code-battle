import React, {Component} from 'react';
import style from './description.scss';

export default class Description extends Component {
    state = {
        description: 'Task description'
    };

    render() {
        return (
            <div className={style.descriptionContainer}>
                { this.state.description }
            </div>
        );
    }
}
