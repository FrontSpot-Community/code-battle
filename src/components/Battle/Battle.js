import React, {Component} from 'react';
import {

} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import styles from './battle.scss';

export default class Battle extends Component {
    render() {
        const {battle} = styles;

        return (
            <section className={battle}>
                <h1>
                  <Link to={`/battle/${this.props.battleId}`}>
                    {this.props.battleTitle}
                  </Link>
                </h1>
            </section>
        );
    }
}
