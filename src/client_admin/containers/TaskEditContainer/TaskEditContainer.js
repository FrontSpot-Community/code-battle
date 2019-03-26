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
  taskDelete,
  taskAdd
} from 'src/client/actions/action_creators/taskActionCreators';
import {bindActionCreators} from 'redux';

import style from './style.scss';

class TaskEditContainer extends React.Component {
  state = {
    ...this.getInitialState(),
    isEditMode: false
  };

  getInitialState(task) {
    return {
      language: task && task.language || 'javascript',
      sample: task && task.sample || '',
      test: task && task.test || '',
      testSample: task && task.testSample || '',
      complexity: task && task.complexity || 'Low',
      name: task && task.name || '',
      stars: task && task.stars || '1',
      description: task && task.description || '',
      numberOfTests: task && task.numberOfTests || '',
      score: task && task.score || 1
    };
  }

  componentDidMount() {
    const {taskId} = this.props.match.params;
    if (taskId) {
      this.setState({isEditMode: true});
      this.props.taskByIdRequest(taskId);
    }
  }

  componentWillReceiveProps(props) {
    this.state.isEditMode && this.setState(this.getInitialState(props.task));
  }

  handleStateUpdate = (prop) => (newText) => this.setState({[prop]: newText});

  saveChanges = (e) => {
    e.preventDefault();
    const {taskUpdate, taskAdd} = this.props;
    let {task = {}} = this.props;

    const {
      sample, name, test, testSample, numberOfTests,
      stars, complexity, description, language, score
    } = this.state;

    const dataToSend = {
      ...task,
      id: this.props.match.params.taskId,
      name: name || task.name,
      test: test || task.test,
      testSample: testSample || task.testSample,
      sample: sample || task.sample,
      complexity: complexity || task.complexity,
      stars: stars || task.stars,
      language: language || task.language,
      description: description || task.description,
      numberOfTests: Number(numberOfTests || task.numberOfTests),
      score: Number(score || task.numberOfTests),
      tournamentId: this.props.match.params.id
    };

    this.state.isEditMode ? taskUpdate(dataToSend) : taskAdd(dataToSend);
  };

  cancelChanges = (e) => {
    e.preventDefault();
    this.setState(this.getInitialState(this.state.isEditMode && this.props.task));
  };

  deleteTask = (e) => {
    e.preventDefault();
    const {taskDelete, task} = this.props;
    taskDelete({...task});
    this.props.history.push(this.props.match.url.replace(`/${task.id}/edit`, ''));
  };

  renderData() {
    const {
      sample, name, test, testSample, stars, score,
      complexity, description, language, numberOfTests
    } = this.state;

    return (
      <div className={style.container}>
        <div className={style.dataContainer}>
          <form className={style.form}>
            <div className={style.wrapper}>
              <div className={style.col}>
                <TaskDetailsEditor
                  difficulty={complexity} name={name} numberOfTests={numberOfTests}
                  description={description} stars={stars} language={language}
                  score={score}
                  onTaskDescriptionChanges={this.handleStateUpdate('description')}
                  onTaskNameChanges={this.handleStateUpdate('name')}
                  onTaskStarsChanges={this.handleStateUpdate('stars')}
                  onTaskDifficultyChanges={this.handleStateUpdate('complexity')}
                  onTaskLanguageChanges={this.handleStateUpdate('language')}
                  onNumberOfTestsChanges={this.handleStateUpdate('numberOfTests')}
                  onScoreChanges={this.handleStateUpdate('score')}
                />
              </div>
              <div className={style.col}>
                <div className={style.row}>
                  <Solution
                    editMode={true}
                    language={language}
                    onSolutionChange={this.handleStateUpdate('sample')}
                    solution={sample}
                  />
                </div>
                <div className={style.row}>
                  <SampleTests
                    header='TESTS'
                    defaultTests={test}
                    language={language}
                    onSampleTestsChange={this.handleStateUpdate('test')}
                    sampleTests={test}
                  />
                </div>
                <div className={style.row}>
                  <SampleTests
                    header='SAMPLE TESTS'
                    defaultTests={testSample}
                    language={language}
                    onSampleTestsChange={this.handleStateUpdate('testSample')}
                    sampleTests={testSample}
                  />
                </div>
              </div>
            </div>
            <div className={style.actions}>
              <Button mod="warn" onClick={this.deleteTask}>DELETE TASK</Button>
              <Button mod="cancel" onClick={this.cancelChanges}>CANCEL</Button>
              <Button mod="success" onClick={this.saveChanges}>
                {this.state.isEditMode ? 'SAVE CHANGES' : 'SAVE'}
              </Button>
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
    taskDelete,
    taskAdd
  }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(TaskEditContainer);
