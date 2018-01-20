import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {taskByIdRequest} from 'src/actions/action_creators/taskActionCreators';
import {TaskPreviewHeader, TaskPreviewInfo, TaskPreviewDiscuss} from 'src/components/TaskPreview';
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

  componentDidMount() {
    const {taskId} = this.props.match.params;
    this.props.taskByIdRequest(taskId);
  }

  onChangeInfoState = (newInfoState) => {
    if (newInfoState !== this.state.infoState) {
      this.setState({infoState: newInfoState});
    }
  };

  onNextTask = () => {
    const {task, tournament} = this.state;
    const taskIndex = tournament.tasks.findIndex((item) => item === task);
    const nextTask = tournament.tasks[taskIndex + 1] || tournament.tasks[0];
    if (nextTask === task) {
      return;
    }
    this.setState({existionChecked: false});
    this.props.history.push(`/${this.props.match.params.id}/${nextTask.id}`);
  };

  onStartTrain = () => {
    this.props.history.push(`${this.props.match.url}/train`);
  };

  renderData() {
    if (!this.props.task) {
      return null;
    }
    return (
      <div className={style.wrapper}>
        <TaskPreviewHeader task={this.props.task} />
        <div className={style.body}>
          <TaskPreviewInfo
            infoState={'details'}
            task={this.props.task}
            onChangeInfoState={this.onChangeInfoState}
            onNextTask={this.onNextTask}
            onStartTrain={this.onStartTrain}
          />
          <TaskPreviewDiscuss task={this.props.task} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={style.mainWrapper}>
        {
          this.props.taskLoading
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
    taskLoading: state.tasks.isLoading
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({taskByIdRequest}, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(TaskContainer);
