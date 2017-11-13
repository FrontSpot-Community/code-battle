import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import TaskList from '../components/TaskList/TaskList';

export default class BattleContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
          taskId: 'task1',
          taskTitle: 'Numbers and Strings',
          taskCat: 'task1',
          taskImage: '',
          taskDesc: ''
        }
      ]
    };
  }

  render() {
      const battleId = this.props.match.params.id;

      return (
        <Grid>
          <h1>{battleId}</h1>
          <Row >
            <Col xs={12} sm={12} md={12} lg={12}>
              <TaskList battle={battleId} {...this.state} />
            </Col>
          </Row>
        </Grid>
      );
  }
}
