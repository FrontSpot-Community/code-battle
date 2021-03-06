import * as React from 'react';
import CodeEditor from 'src/client/components/CodeEditor';

import style from './style.scss';

class SampleTests extends React.Component {
  render() {
    const {
      header,
      language,
      sampleTests,
      defaultTests,
      onSampleTestsChange
    } = this.props;

    return (
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.headerName}>{header || 'SAMPLE TESTS'}</span>
          {/* <div className={style.headerButtons}>
            <button className={style.runSampleTestsButton} onClick={this.props.runSampleTests}>
              <span className={style.runSampleTestsButtonText}>RUN TESTS</span>
            </button>
          </div> */}
        </div>
        <CodeEditor
          language={language}
          value={sampleTests || defaultTests || ''}
          onCodeEditorChange={onSampleTestsChange}
        />
      </div>
    );
  }
}

export default SampleTests;
