import React from 'react';
import {connect} from 'react-redux';

// import TaskDescription from '../../components/TaskDescription/TaskDescription';
// import TaskOutput from '../../components/TaskOutput/TaskOutput';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import Button from '../../components/Common/Button';
import {solutionRequest} from '../../actions/action_creators/solutionActionCreators';
import {bindActionCreators} from 'redux';

import style from './style.scss';

class TaskTrainContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      description: 'Task Description',
      solution: 'function findEvenIndex(arr)\n' +
      '{\n' +
      '    //Code goes here!\n' +
      '}',
      sampleTests: 'Test.describe("FindEvenIndex", function() {\n' +
      '  Test.it("Tests", function() {\n' +
      '    Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array: [1,2,3,4,5,6] \\n");\n' +
      '  });\n' +
      '});'
    };
  }

  submitTask = () => {
    this.props.solutionRequest({
      taskId: '5a40b0f8d999dc0115e77e2f',
      solutionCode: this.state.solution
    });
  };

  runTests = () => {
    // run test action
  };

  onCodeEditorChange = (newText) => {
    this.setState({
      solution: newText
    });
  };

  resetSolution = () => this.setState({solution: ''});

  render() {
    // const {solution} = this.props;

    // const solutionOutput = solution && solution.runOutput || '';

    return (
      <div className={style.container}>
        <div className={style.taskName}>{this.props.match.params.id}</div>
        <div className={style.row}>
          <div className={style.contentBlock}>
            <div className={style.contentBlockHeader}>
              <span className={style.contentBlockName}>SOLUTION</span>
              <div className={style.contentBlockHeaderRightArea}>
                <button onClick={this.resetSolution} className={style.resetButton}>
                  <span className={style.resetButtonText}>RESET</span>
                </button>
                <Button onClick={this.submitTask}>SUBMIT</Button>
              </div>
            </div>
            <CodeEditor
              value={this.state.solution}
              onCodeEditorChange={this.onCodeEditorChange}
            />
          </div>
          <div className={style.contentBlock}>
            <div className={style.contentBlockHeader}>
              <span className={style.contentBlockName}>SAMPLE TESTS</span>
              <button onClick={this.runTests} className={style.runTestsButton}>
                <span className={style.runTestsButtonText}>RUN TESTS</span>
              </button>
            </div>
            <CodeEditor
              value={this.state.sampleTests}
              onCodeEditorChange={this.onCodeEditorChange}
            />
          </div>
        </div>
      </div>
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
