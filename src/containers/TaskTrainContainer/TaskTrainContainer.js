import React from 'react';
import {
  Grid,
  Row,
  Col,
  Tabs,
  Tab
} from 'react-bootstrap';
import TaskDescription from '../../components/TaskDescription/TaskDescription';
import TaskOutput from '../../components/TaskOutput/TaskOutput';
import CodeEditor from '../../components/CodeEditor/CodeEditor';

export default class TaskTrainContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      description: 'Task Description',
      output: 'Task Output'
    };
  }

  render() {
    return (
      <Grid fluid={true}>
        <h1>Task : {this.props.match.params.taskId}</h1>
        <Row>
          <Col md={5}>
            <Tabs id={'taskDescriptionTabs'} defaultActiveKey={1}>
              <Tab eventKey={1} title={'Description'}>
                <TaskDescription
                  description={this.state.description}
                />
              </Tab>
              <Tab eventKey={2} title={'Output'}>
                <TaskOutput
                  output={this.state.output}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col md={7}>
            <CodeEditor />
          </Col>
        </Row>
      </Grid>
    );
  }
}
