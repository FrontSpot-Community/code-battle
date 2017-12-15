import React, {Component} from 'react';

export default class TaskOutput extends Component {
  render() {
    return (
      <div>
        {this.props.output}
      </div>
    );
  }
}
