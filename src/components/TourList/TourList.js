import React, {Component} from 'react';
import Tour from '../Tour/Tour';

export default class TourList extends Component {
    render() {
      return (
          <section>
            {this.props.battles.map((battle, index) => {
              return (
                <Tour key={battle.battleId} {...battle} />
              );
            })}
          </section>
      );
    }
}
