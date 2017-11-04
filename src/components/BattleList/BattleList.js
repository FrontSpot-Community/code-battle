import React, {Component} from 'react';
import Battle from '../Battle/Battle';

export default class BattleList extends Component {
    render() {
      return (
          <section>
            {this.props.battles.map((battle, index) => {
              return (
                <Battle key={battle.battleId} {...battle} />
              );
            })}
          </section>
      );
    }
}
