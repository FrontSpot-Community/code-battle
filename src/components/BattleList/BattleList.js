import React, {Component} from 'react';
import Battle from '../Battle/Battle';
import styles from './battlelist.scss';

export default class BattleList extends Component {
    render() {
      const {btlist} = styles;

      return (
          <section className={btlist}>
            {this.props.battles.map((battle, index) => {
              return (
                <Battle key={battle.battleId} {...battle} />
              );
            })}
          </section>
      );
    }
}
