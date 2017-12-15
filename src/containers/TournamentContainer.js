import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import TaskList from '../components/TaskList/TaskList';

class TournamentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
          taskId: 'numbers-and-strings',
          taskTitle: 'Numbers and Strings',
          taskCat: 'task1',
          taskImage: '',
          taskDesc: ''
        }
      ]
    };
  }

  render() {
    const tournamentId = this.props.match.params.id;

    return (
      <Grid>
        <h1>{tournamentId}</h1>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <TaskList tournament={tournamentId} {...this.state} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default TournamentContainer;
