import React, {Component} from 'react';
import Tournament from '../Tournament/Tournament';

export default class TourList extends Component {
  renderList = () => {
    return this.props.tournaments && this.props.tournaments.map((t, i) => {
      return (
        <Tournament key={t.id} {...t} />
      );
    });
  }

  render() {
    return (
        <section>
          {this.renderList()}
        </section>
    );
  }
}
