import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Battle extends Component {
    render() {
        return (
            <section>
                <h1>
                  <Link to={`/battle/${this.props.battleId}`}>
                    {this.props.battleTitle}
                  </Link>
                </h1>
            </section>
        );
    }
}
