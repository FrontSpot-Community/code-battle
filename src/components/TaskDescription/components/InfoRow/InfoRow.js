import React, {Component} from 'react';
import {Badge} from 'react-bootstrap';

import style from './infoRow.scss';

export default class InfoRow extends Component {
    state = {
        totalSolutions: 7
    };

    render() {
        return (
            <div className={style.infoRow}>
                <span className={style.totalSolutions}>
                    Total Solutions:
                    <Badge className={style.totalSolutionsNumber}>
                        { this.state.totalSolutions }
                    </Badge>
                </span>
            </div>
        );
    }
}
