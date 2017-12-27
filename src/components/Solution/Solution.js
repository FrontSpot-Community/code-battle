import * as React from 'react';
import CodeEditor from '../../components/CodeEditor';
import Button from '../../components/Common/Button';

import style from './style.scss';

class Solution extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.headerName}>SOLUTION</span>
          <div className={style.headerButtons}>
            <button className={style.resetButton} onClick={this.props.resetSolution}>
              <span className={style.resetButtonText}>RESET</span>
            </button>
            <Button onClick={this.submitTask}>SUBMIT</Button>
          </div>
        </div>
        <CodeEditor
          value={this.props.solution}
          onCodeEditorChange={this.props.onSolutionChange}
        />
      </div>
    );
  }
}

export default Solution;
