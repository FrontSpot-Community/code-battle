import React from 'react';
import {connect} from 'react-redux';

import Solution from '../../components/Solution';
import TooltipsBoard from 'src/components/TooltipsBoard';
import SampleTests from '../../components/SampleTests';
import TaskDetails from '../../components/TaskDetails';
import Output from '../../components/Output';

import {taskByIdRequest} from 'src/actions/action_creators/taskActionCreators';
import {solutionRequest} from '../../actions/action_creators/solutionActionCreators';
import {bindActionCreators} from 'redux';

import style from './style.scss';

const mockData = {
  solution: 'function findEvenIndex(arr)\n' +
  '{\n' +
  '    //Code goes here!\n' +
  '}',
  statusBar: {
    complexity: 'Mortal',
    contentmentPercent: '90%',
    contentmentQuantity: '3 251',
    resolvedSuccessfully: '777',
    resolvedQuantity: '15 358',
    authorName: 'Evil JS Forest Troll',
    taskStatus: 'Open'
  }
};

class TaskTrainContainer extends React.Component {
  constructor(props) {
    super(props);
    const {task} = props;
    this.state = {
      solution: task && task.solution || mockData.solution,
      sampleTests: '',
      details: task && task.description || '',
      output: {
        details: 'To be continued...'
      }
    };
  }

  componentDidMount() {
    const {taskId} = this.props.match.params;
    this.props.taskByIdRequest(taskId);
  }

  submitTask = () => {
    const {taskId} = this.props.match.params;
    this.props.solutionRequest({
      taskId: taskId,
      solutionCode: this.state.solution
    });
  };

  runSampleTests = () => {
    // run test action
  };

  onSolutionChange = (newText) => {
    this.setState({
      solution: newText
    });
  };

  onSampleTestsChange = (newText) => {
    this.setState({
      solution: newText
    });
  };

  resetSolution = () => this.setState({solution: ''});

  getRunStatistics = (stat) => {
    if (!stat) {
      return {
        time: '-',
        passed: '-',
        failed: '-',
        errors: '-'
      };
    }
    const {time, passed, failed, error} = stat;
    const getNumberOrDash = (value) => !value && value !== 0 ? '-': value;

    return {
      time: getNumberOrDash(time),
      passed: getNumberOrDash(passed),
      failed: getNumberOrDash(failed),
      errors: getNumberOrDash(error)
    };
  }

  getOutput = (jsonResult) => {
    try {
      return JSON.parse(jsonResult);
    } catch (err) {
      return null;
    }
  }

  render() {
    const {solutionResult, task} = this.props;
    const outputData = this.getOutput(solutionResult && solutionResult.jsonResult);
    const statistics = this.getRunStatistics(solutionResult && solutionResult.statistics);
    return (
      <div className={style.container}>
        {
          !task
            ? <div className={style.loader} />
            : (
              <div className={style.dataContainer}>
                <div className={style.taskName}>{this.props.match.params.id}</div>
                <TooltipsBoard className={style.tooltips} task={this.props.task} />
                <div className={style.row}>
                  <Solution
                    solution={this.state.solution}
                    onSolutionChange={this.onSolutionChange}
                    resetSolution={this.resetSolution}
                    onSubmitTask={this.submitTask}
                  />
                  <SampleTests
                    defaultTests={task && task.test}
                    sampleTests={this.state.sampleTests} runSampleTests={this.runSampleTests}
                    onSampleTestsChange={this.onSampleTestsChange}
                  />
                </div>
                <div className={style.row}>
                  <TaskDetails details={task && task.description} />
                  <Output
                    outputData={outputData}
                    time={statistics.time}
                    passed={statistics.passed}
                    failed={statistics.failed}
                    errors={statistics.errors}
                  />
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    task: state.tasks.taskById,
    taskLoading: state.tasks.isLoading,
    solutionResult: state.solution.result,
    solutionError: state.solution.error,
    solutionLoading: state.solution.isLoading
  };
};

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({solutionRequest, taskByIdRequest}, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(TaskTrainContainer);
