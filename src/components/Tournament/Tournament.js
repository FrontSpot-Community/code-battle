import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Glyphicon
} from 'react-bootstrap';

import './tournament.scss';

export default class Tournament extends Component {
    render() {
        return (
            <section className="tournament">
              <section className="tournament-icon">
                <Glyphicon glyph="book" />
              </section>
              <section className="tournament-info">
                <section className="tournament-title">
                  <Link to={`/battle/${this.props.id}`}>
                   {this.props.title}
                  </Link>
                </section>
                <section className="tournament-author">
                  by {this.props.author}
                </section>
              </section>
            </section>
        );
    }
}
