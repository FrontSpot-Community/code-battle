import * as React from 'react';
import CodeEditor from '../../components/CodeEditor';

import style from './style.scss';

class SampleTests extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.headerName}>SAMPLE TESTS</span>
          <div className={style.headerButtons}>
            <button className={style.runSampleTestsButton} onClick={this.props.runSampleTests}>
              <span className={style.runSampleTestsButtonText}>RUN TESTS</span>
            </button>
          </div>
        </div>
        <CodeEditor
          value={this.props.defaultTests || this.props.sampleTests}
          onCodeEditorChange={this.props.onSampleTestsChange}
        />
      </div>
    );
  }
}

export default SampleTests;
