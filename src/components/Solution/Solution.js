import * as React from 'react';
import CodeEditor from '../../components/CodeEditor';
import Button from '../../components/Common/Button';

import style from './style.scss';

class Solution extends React.Component {
  render() {
    const {
      language,
      onSubmitTask,
      solution,
      onSolutionChange,
      resetSolution
    } = this.props;

    return (
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.headerName}>SOLUTION</span>
          <div className={style.headerButtons}>
            <Button mod="cancel" onClick={resetSolution}>RESET</Button>
            <Button onClick={onSubmitTask}>SUBMIT</Button>
          </div>
        </div>
        <CodeEditor
          language={language}
          value={solution}
          onCodeEditorChange={onSolutionChange}
        />
      </div>
    );
  }
}

export default Solution;
