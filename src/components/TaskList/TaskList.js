import React, {Component} from 'react';
import Task from '../Task/Task';

class TaskList extends Component {
    render() {
      const {tournament} = this.props;
      return (
          <section>
            {this.props.tasks.map((task) => {
              return (
                <Task
                    key={task.taskId}
                    tournament={tournament}
                    {...task}
                />
              );
            })}
          </section>
      );
    }
}

export default TaskList;
