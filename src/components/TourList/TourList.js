import React, {Component} from 'react';
import Tour from '../Tour/Tour';

export default class TourList extends Component {
    renderList = () => {
      return this.props.tours && this.props.tours.map((tour, index) => {
        return (
          <Tour key={tour.id} {...tour} />
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
