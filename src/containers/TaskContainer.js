import React from 'react';
import TaskPanel from '../components/TaskPanel';

export default class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
            <TaskPanel match={this.props.match}/>
        </div>
      );
  }
}
