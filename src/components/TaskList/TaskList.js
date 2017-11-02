import React, {Component} from 'react';
import Task from '../Task/Task';
import styles from './tasklist.scss';

export default class BattleList extends Component {
    render() {
      const {tasklist} = styles;

      return (
          <section className={tasklist}>
            {this.props.tasks.map((task, index) => {
              return (
                <Task key={task.taskId} battle={this.props.battle} {...task} />
              );
            })}
          </section>
      );
    }
}
