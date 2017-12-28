import React from 'react';
import {connect} from 'react-redux';
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
import Button from '../../components/Common/Button';
import {solutionRequest} from '../../actions/action_creators/solutionActionCreators';
import {bindActionCreators} from 'redux';

class TaskTrainContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      description: 'Task Description',
      output: 'Task Output',
      solution: ''
    };
  }

  submitTask = () => {
    this.props.solutionRequest({
      taskId: '5a44c84b7a50db7e70a44a81',
      solutionCode: this.state.solution
    });
  }

  onCodeEditorChange = (newText) => {
    this.setState({
      solution: newText
    });
  }

  render() {
    const {solution} = this.props;
    const solutionOutput = solution && solution.runOutput || '';
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
                  output={solutionOutput}
                />
              </Tab>
            </Tabs>
          </Col>
          <Col md={7}>
            <CodeEditor
              onChange={this.onCodeEditorChange}
            />
          </Col>
        </Row>
        <Row>
          <Button mod='success' onClick={this.submitTask}>SUBMIT</Button>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    solution: state.solution.result,
    solutionError: state.solution.error,
    solutionLoading: state.solution.isLoading
  };
};

const mapActionsToProps = (dispatch) => (bindActionCreators({solutionRequest}, dispatch));

export default connect(mapStateToProps, mapActionsToProps)(TaskTrainContainer);
