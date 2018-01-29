import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import {
  taskByIdRequest
} from 'src/actions/action_creators/taskActionCreators';
import {
  solutionByTaskIdRequest
} from '../../actions/action_creators/solutionActionCreators';
import {tournamentsByIdRequest} from 'src/actions/action_creators/tournamentActionCreators';
import {TaskPreviewHeader, TaskPreviewInfo} from 'src/components/TaskPreview';
import Loader from 'src/components/Loader';
import style from './style.scss';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      existionChecked: false,
      task: {},
      infoState: 'details'
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const {taskId} = nextProps.match.params;
      this.props.taskByIdRequest(taskId);
      this.props.solutionByTaskIdRequest({taskId});
    }
  }

  componentDidMount() {
    const {taskId} = this.props.match.params;
    this.props.taskByIdRequest(taskId);
    this.props.solutionByTaskIdRequest({taskId});
    if (!this.props.tournament) {
      const {id} = this.props.match.params;
      const requestData = {id};
      this.props.tournamentsByIdRequest(requestData);
    }
  }

  onChangeInfoState = (newInfoState) => {
    if (newInfoState !== this.state.infoState) {
      this.setState({infoState: newInfoState});
    }
  };

  onNextTask = () => {
    const tasks = this.props.tournament.taskIds;
    const currentTaskIndex = tasks.findIndex((item) => item._id === this.props.task._id);
    const nextTaskIndex = currentTaskIndex + 1 < tasks.length ? currentTaskIndex + 1 : 0;
    nextTaskIndex !== currentTaskIndex && this.props.history.push(`/${this.props.match.params.id}/${tasks[nextTaskIndex].id}`);
  };

  onStartTrain = () => {
    this.props.history.push(`${this.props.match.url}/train`);
  };

  isSolutionComplete() {
    const {solutionResult} = this.props;
    if (!solutionResult) return 'Open';

    return solutionResult.completed ? 'Resolved' : 'In progress';
  }

  renderData() {
    const {solutionResult, task} = this.props;
    const tooltipData = {
      name: task && task.name,
      difficulty: task && task.difficulty,
      author: task && task.author,
      satisfaction: task && task.satisfaction,
      status: this.isSolutionComplete()
    };

    return (
      <div className={style.wrapper}>
        <TaskPreviewHeader task={tooltipData} />
        <div className={style.body}>
          <TaskPreviewInfo
            isSolutionComplete={this.isSolutionComplete()}
            infoState={this.state.infoState}
            task={this.props.task}
            solution={solutionResult && solutionResult.solutionCode}
            onChangeInfoState={this.onChangeInfoState}
            onNextTask={this.onNextTask}
            onStartTrain={this.onStartTrain}
          />
          {/* <TaskPreviewDiscuss task={this.props.task} /> */}
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
    tournament: state.tournaments.tournamentById,
    task: state.tasks.taskById,
    taskLoading: state.tasks.isLoading,
    solutionResult: state.solution.result,
    solutionError: state.solution.error,
    solutionLoading: state.solution.isLoading
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({
    taskByIdRequest,
    solutionByTaskIdRequest,
    tournamentsByIdRequest
  }, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(withRouter(TaskContainer));
