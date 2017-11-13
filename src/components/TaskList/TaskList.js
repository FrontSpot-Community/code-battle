import React, {Component} from 'react';
import Task from '../Task/Task';

export default class BattleList extends Component {
    render() {
      return (
          <section>
            {this.props.tasks.map((task, index) => {
              return (
                <Task key={task.taskId} battle={this.props.battle} {...task} />
              );
            })}
          </section>
      );
    }
}
