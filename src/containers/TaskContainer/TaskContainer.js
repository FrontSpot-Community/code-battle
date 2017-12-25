import React from 'react';
import {connect} from 'react-redux';

import {TaskPreviewHeader, TaskPreviewInfo, TaskPreviewDiscuss} from 'src/components/TaskPreview';
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

  getTaskInfo() {
    const battleId = this.props.match.params.id;
    const taskId = this.props.match.params.taskId;
    const tournament = this.props.tournaments.find((tournament) => tournament.id === battleId);
    if (!tournament) {
      this.props.history.push('/about');
      return;
    }
    const task = tournament.tasks.find((task) => task.id === taskId);
    this.setState({
      existionChecked: true,
      nextTaskLoading: false,
      task,
      tournament
    });
  }

  renderData() {
    if (!this.state.existionChecked) {
      this.getTaskInfo();
      return;
    }
    const {infoState, task} =this.state;
    return (
      <div className={style.wrapper}>
        <TaskPreviewHeader task={this.state.task} />
        <div className={style.body}>
          <TaskPreviewInfo
            infoState={infoState}
            task={task}
            onChangeInfoState={this.onChangeInfoState}
            onNextTask={this.onNextTask}
            onStartTrain={this.onStartTrain}
          />
          <TaskPreviewDiscuss task={this.state.task} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={style.mainWrapper}>
        {
          this.props.tournamentsLoading
            ? <div className={style.loader} />
            : this.renderData()
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.data,
    tournamentsLoading: state.tournaments.isLoading
  };
};

export default connect(mapStateToProps)(TaskContainer);
