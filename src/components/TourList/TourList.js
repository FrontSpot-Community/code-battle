import React, {Component} from 'react';
import Tour from '../Tour/Tour';

export default class TourList extends Component {
    render() {
      return (
          <section>
            {this.props.tours && this.props.tours.map((tour, index) => {
              return (
                <Tour key={tour.id} {...tour} />
              );
            })}
          </section>
      );
    }
}
