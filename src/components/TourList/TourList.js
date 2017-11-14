import React, {Component} from 'react';
import Tour from '../Tour/Tour';

export default class TourList extends Component {
  renderList = () => {
    return this.props.tournaments && this.props.tournaments.map((t, i) => {
      return (
        <Tour key={t.id} {...t} />
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
