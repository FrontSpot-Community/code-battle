import React from 'react';
import {connect} from 'react-redux';

import Solution from 'src/client/components/Solution';
import SampleTests from 'src/client/components/SampleTests';
import TaskDetailsEditor from 'src/client_admin/components/TaskDetailsEditor';
import Loader from 'src/client/components/Loader';
import {Button} from 'src/client/components/Common';

import {
  taskByIdRequest,
  taskUpdate,
  taskDelete
} from 'src/client/actions/action_creators/taskActionCreators';
import {bindActionCreators} from 'redux';

import style from './style.scss';

class TaskEditContainer extends React.Component {
  state = {
    id: '',
    sample: '',
    name: '',
    test: '',
    stars: '',
    complexity: '',
    description: '',
    language: ''
  };

  componentDidMount() {
    const {taskId} = this.props.match.params;
    this.props.taskByIdRequest(taskId);
  }

  componentWillReceiveProps(props) {
    const {task} = props;
    this.setState({
      id: props.match.params.taskId,
      sample: task ? task.sample : '',
      name: task ? task.name : '',
      test: task ? task.test : '',
      stars: task ? task.stars : '',
      complexity: task ? task.complexity : '',
      description: task ? task.description : '',
      language: task ? task.language : ''
    });
  }

  handleSampleTestsChanges = (newText) => {
    this.setState({test: newText});
  };

  handleSampleSolutionChanges = (newText) => {
    this.setState({sample: newText});
  };

  handleTaskDescriptionChanges = (newText) => {
    this.setState({description: newText});
  };

  handleTaskNameChanges = (newText) => {
    this.setState({name: newText});
  };

  handleTaskStarsChanges = (newText) => {
    this.setState({stars: newText});
  };

  handleTaskDifficultyChanges = (newText) => {
    this.setState({complexity: newText});
  };

  saveChanges = (e) => {
    e.preventDefault();
    const {taskId} = this.props.match.params;
    const {taskUpdate, task} = this.props;

    const {
      sample, name, test, id,
      stars, complexity, description, language
    } = this.state;

    taskUpdate({
      ...task,
      id: id === '' ? taskId : id,
      name: name === '' ? task.name : name,
      test: test === '' ? task.test : test,
      sample: sample === '' ? task.sample : sample,
      complexity: complexity === '' ? task.complexity : complexity,
      stars: stars === '' ? task.stars : stars,
      language: language === '' ? task.language : language,
      description: description === '' ? task.description : description
    });

    this.setState({
      name: name === '' ? task.name : name,
      test: test === '' ? task.test : test,
      sample: sample === '' ? task.sample : sample,
      complexity: complexity === '' ? task.complexity : complexity,
      stars: stars === '' ? task.stars : stars,
      language: language === '' ? task.language : language,
      description: description === '' ? task.description : description
    });
  };

  cancelChanges = (e) => {
    e.preventDefault();
    const {task} = this.props;
    this.setState({
      language: task && task.language || '',
      sample: task && task.sample || '',
      test: task && task.test || '',
      complexity: task && task.complexity || '',
      name: task && task.name || '',
      stars: task && task.stars || '',
      description: task && task.description || ''
    });
  };

  deleteTask = (e) => {
    e.preventDefault();
    const {taskDelete, task} = this.props;
    taskDelete({...task});
    this.props.history.push(this.props.match.url.replace(task.id, ''));
  };

  renderData() {
    const {
      sample, name, test, stars,
      complexity, description, language
    } = this.state;

    return (
      <div className={style.container}>
        <div className={style.dataContainer}>
          <form className={style.form}>
            <div className={style.wrapper}>
              <div className={style.col}>
                <TaskDetailsEditor
                  difficulty={complexity} name={name}
                  description={description} stars={stars}
                  onTaskDescriptionChanges={this.handleTaskDescriptionChanges}
                  onTaskNameChanges={this.handleTaskNameChanges}
                  onTaskStarsChanges={this.handleTaskStarsChanges}
                  onTaskDifficultyChanges={this.handleTaskDifficultyChanges}
                />
              </div>
              <div className={style.col}>
                <div className={style.row}>
                  <Solution
                    editMode={true}
                    language={language}
                    onSolutionChange={this.handleSampleSolutionChanges}
                    solution={sample}
                  />
                </div>
                <div className={style.row}>
                  <SampleTests
                    defaultTests={test}
                    language={language}
                    onSampleTestsChange={this.handleSampleTestsChanges}
                    sampleTests={test} runSampleTests={this.runSampleTests}
                  />
                </div>
              </div>
            </div>
            <div className={style.actions}>
              <Button mod="warn" onClick={this.deleteTask}>DELETE TASK</Button>
              <Button mod="cancel" onClick={this.cancelChanges}>CANCEL</Button>
              <Button mod="success" onClick={this.saveChanges}>SAVE CHANGES</Button>
            </div>
          </form>
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
    taskLoading: state.tasks.isLoading,
    userInfo: state.user.userInfo
  };
};

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    taskByIdRequest,
    taskUpdate,
    taskDelete
  }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(TaskEditContainer);
