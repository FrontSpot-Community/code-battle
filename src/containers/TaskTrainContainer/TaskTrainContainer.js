import React from 'react';
import {connect} from 'react-redux';

import Solution from '../../components/Solution';
import StatusBar from '../../components/StatusBar';
import SampleTests from '../../components/SampleTests';
import TaskDetails from '../../components/TaskDetails';
import Output from '../../components/Output';

import {solutionRequest} from '../../actions/action_creators/solutionActionCreators';
import {bindActionCreators} from 'redux';

import style from './style.scss';

const mockData = {
  solution: 'function findEvenIndex(arr)\n' +
  '{\n' +
  '    //Code goes here!\n' +
  '}',
  sampleTests: 'Test.describe("FindEvenIndex", function() {\n' +
  '  Test.it("Tests", function() {\n' +
  '    Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array: [1,2,3,4,5,6] \\n");\n' +
  '  });\n' +
  '});',
  details: 'You are going to be given an array of integers. ' +
  'Your job is to take that array and find an index N where the ' +
  'sum of the integers to the left of N is equal to the sum of the integers to the right of N. ' +
  'If there is no index that would make this happen, return   -1  .',
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
  constructor() {
    super();
    this.state = {
      solution: mockData.solution,
      sampleTests: mockData.sampleTests,
      details: mockData.details,
      output: {
        details: 'To be continued...',
        time: '321ms',
        passed: '0',
        failed: '2',
        errors: '1'
      }
    };
  }

  submitTask = () => {
    this.props.solutionRequest({
      taskId: '5a44c84b7a50db7e70a44a81',
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

  render() {
    const {solutionResult} = this.props;
    const solutionOutput = solutionResult
      && solutionResult.runOutput.replace(/<IT::>/g, '<br/><br/>')
      || this.state.details;

    return (
      <div className={style.container}>
        <div className={style.taskName}>{this.props.match.params.id}</div>
        <StatusBar
          complexity={mockData.statusBar.complexity}
          contentmentPercent={mockData.statusBar.contentmentPercent}
          contentmentQuantity={mockData.statusBar.contentmentQuantity}
          resolvedSuccessfully={mockData.statusBar.resolvedSuccessfully}
          resolvedQuantity={mockData.statusBar.resolvedQuantity}
          authorName={mockData.statusBar.authorName}
          taskStatus={mockData.statusBar.taskStatus}
        />
        <div className={style.row}>
          <Solution
            solution={this.state.solution}
            onSolutionChange={this.onSolutionChange}
            resetSolution={this.resetSolution}
            onSubmitTask={this.submitTask}
          />
          <SampleTests
            sampleTests={this.state.sampleTests}
            runSampleTests={this.runSampleTests}
            onSampleTestsChange={this.onSampleTestsChange}
          />
        </div>
        <div className={style.row}>
          <TaskDetails details={this.state.details} />
          <Output
            details={solutionOutput}
            time={this.state.output.time}
            passed={this.state.output.passed}
            failed={this.state.output.failed}
            errors={this.state.output.errors}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    solutionResult: state.solution.result,
    solutionError: state.solution.error,
    solutionLoading: state.solution.isLoading
  };
};

const mapActionsToProps = (dispatch) => (bindActionCreators({solutionRequest}, dispatch));

export default connect(mapStateToProps, mapActionsToProps)(TaskTrainContainer);
