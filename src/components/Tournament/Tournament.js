import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Tournament extends Component {
    render() {
        return (
            <section>
                <h1>
                  <Link to={`/battle/${this.props.id}`}>
                    {this.props.title}
                  </Link>
                </h1>
            </section>
        );
    }
}
