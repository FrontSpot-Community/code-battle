import React from 'react';
import {connect} from 'react-redux';

import Solution from '../../components/Solution';
import TooltipsBoard from 'src/components/TooltipsBoard';
import SampleTests from '../../components/SampleTests';
import TaskDetails from '../../components/TaskDetails';
import Output from '../../components/Output';
import Loader from '../../components/Loader';

import {taskByIdRequest} from 'src/actions/action_creators/taskActionCreators';
import {
  submitSolutionRequest,
  solutionByTaskIdRequest
} from '../../actions/action_creators/solutionActionCreators';
import {bindActionCreators} from 'redux';

import style from './style.scss';

class TaskTrainContainer extends React.Component {
  constructor(props) {
    super(props);
    const {task} = props;
    this.state = {
      solution: task && task.solution || '',
      sampleTests: '',
      details: task && task.description || '',
      output: {
        details: 'To be continued...'
      }
    };
  }

  componentWillReceiveProps(newProps) {
    const {solutionResult} = this.props;
    if (solutionResult) return;

    if (newProps.solutionResult) {
      this.setState({solution: newProps.solutionResult.solutionCode});
    }
  }

  componentDidMount() {
    const {taskId} = this.props.match.params;
    this.props.taskByIdRequest(taskId);
    this.props.solutionByTaskIdRequest({taskId});
  }

  submitTask = () => {
    const {taskId} = this.props.match.params;
    this.props.submitSolutionRequest({
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

  renderOutput(outputData, statistics, solutionSubmitLoading) {
    if (solutionSubmitLoading) {
      return <div className={style.outputContainer}>
        <Loader />
      </div>;
    }
    return (
      <Output
        outputData={outputData}
        time={statistics.time}
        passed={statistics.passed}
        failed={statistics.failed}
        errors={statistics.errors}
      />
    );
  }

  renderData() {
    const {solutionResult, solutionSubmitLoading, task} = this.props;
    const outputData = this.getOutput(solutionResult && solutionResult.jsonResult);
    const statistics = this.getRunStatistics(solutionResult && solutionResult.statistics);
    const tooltipData = {
      difficulty: task && task.difficulty,
      author: task && task.author,
      satisfaction: task && task.satisfaction,
      status: solutionResult && solutionResult.completed && 'Resolved' || 'Open'
    };
    return (
      <div className={style.container}>
        <div className={style.dataContainer}>
          <div className={style.taskName}>{task && task.name}</div>
          <TooltipsBoard className={style.tooltips} task={tooltipData} />
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
            {this.renderOutput(outputData, statistics, solutionSubmitLoading)}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={style.mainWrapper}>
        {
          this.props.taskLoading || this.props.solutionLoading
            ? <Loader />
            : this.renderData()
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
    solutionLoading: state.solution.isLoading,
    solutionSubmitLoading: state.solution.isSubmitLoading
  };
};

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    submitSolutionRequest,
    solutionByTaskIdRequest,
    taskByIdRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(TaskTrainContainer);
