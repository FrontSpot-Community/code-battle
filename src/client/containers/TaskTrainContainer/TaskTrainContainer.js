import React from 'react';
import {connect} from 'react-redux';

import Solution from '../../components/Solution';
import TooltipsBoard from '../../components/TooltipsBoard';
import SampleTests from '../../components/SampleTests';
import TaskDetails from '../../components/TaskDetails';
import Output from '../../components/Output';
import Loader from '../../components/Loader';

import {taskByIdRequest} from 'src/client/actions/action_creators/taskActionCreators';
import {
  submitSolutionRequest,
  solutionByTaskIdRequest
} from 'src/client/actions/action_creators/solutionActionCreators';
import withActivePageDispatch from 'common/components/Hocs/withActivePageDispatch';
import withPageName from 'common/components/Hocs/withPageName';
import {bindActionCreators} from 'redux';
import {TASK_TRAIN_PAGE} from 'common/constants/activePageNames';

import style from './style.scss';

class TaskTrainContainer extends React.Component {
  constructor(props) {
    super(props);
    const {task, solutionResult} = props;
    this.state = {
      solution: task && task.sample || solutionResult && solutionResult.solutionCode || '',
      isSolutionDirty: false,
      sampleTests: '',
      details: task && task.description || '',
      output: {
        details: 'To be continued...'
      }
    };
  }

  componentWillReceiveProps(newProps) {
    if (!this.state.isSolutionDirty) {
      const solution = newProps.solutionResult && newProps.solutionResult.solutionCode
        || newProps.task && newProps.task.sample;
      this.setState({solution});
    }
  }

  componentDidMount() {
    const {taskId} = this.props.match.params;
    this.props.taskByIdRequest(taskId);
    this.props.solutionByTaskIdRequest({taskId});
  }

  submitTask = () => {
    const {taskId} = this.props.match.params;
    if (!this.state.solution) return;
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
      isSolutionDirty: true,
      solution: newText
    });
  };

  onSampleTestsChange = (newText) => {
    this.setState({
      sampleTests: newText
    });
  };

  resetSolution = () => this.setState({solution: this.props.task.sample});

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
    const {task, solutionResult} = this.props;
    const secTaskIds = [
      'Phase_1:_Hack_The_Email',
      'Phase_2:_Fake_ID_Badge',
      'Phase_3:_Configure_&_Install_Keylogger',
      'Phase_4:_Bypass_Server_Firewall'
    ];

    let isSec = false;
    if (task && secTaskIds.includes(task.id)) {
      isSec = true;
    }

    if (solutionSubmitLoading) {
      return <div className={style.outputContainer}>
        <Loader />
      </div>;
    }
    return (
      <Output
        show={isSec && (solutionResult && solutionResult.completed)}
        details={task && task.id}
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
    const withoutTestsText = 'Sorry, tests sample are not present.';
    return (
      <div className={style.container}>
        <div className={style.dataContainer}>
          <div className={style.taskName}>{task && task.name}</div>
          <TooltipsBoard className={style.tooltips} task={tooltipData} />
          <div className={style.row}>
            <Solution
              language={task && task.language}
              onSolutionChange={this.onSolutionChange}
              onSubmitTask={this.submitTask}
              resetSolution={this.resetSolution}
              solution={this.state.solution}
            />
            <SampleTests
              defaultTests={(task && task.testSample) || withoutTestsText}
              language={task && task.language}
              onSampleTestsChange={this.onSampleTestsChange}
              sampleTests={this.state.sampleTests} runSampleTests={this.runSampleTests}
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

export default connect(mapStateToProps, mapActionsToProps)(
  withActivePageDispatch(
    withPageName(TaskTrainContainer, TASK_TRAIN_PAGE)
  )
);
