import React, {Component} from 'react';
import style from './taskOutput.scss';

export default class TaskOutput extends Component {
    render() {
        return (
            <div className={style.outputContainer}>
                {this.props.output}
            </div>
        );
    }
}
