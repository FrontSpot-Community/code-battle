import React, {Component} from 'react';
import style from './style.scss';

class Output extends Component {
  renderTestLine(name, className, key) {
    return (<div className={className} key={key}>{name}</div>);
  }

  renderTime(time, className, key) {
    return time
      ? <div className={className} key={key}>Completed in {time} ms</div>
      : null;
  }

  renderError(trace, key) {
    return (
      <div className={style.error} key={key}>
        <pre>{trace}</pre>
      </div>
    );
  }

  parseCodewarsOutput = (outputData) => {
    if (!Array.isArray(outputData)) return null;

    return outputData.reduce((accum, suite, suiteIndex) => {
      accum.push(this.renderTestLine(suite.name, style.suite, `suite_${suiteIndex}`));
      const {tests} = suite;

      if (Array.isArray(tests)) {
        tests.forEach((test, testIndex) => {
          const {status, text, name} = test;

          accum.push(this.renderTestLine(name, style.test, `suite_test_${testIndex}`));

          if (status === 'error' && typeof text === 'string') {
            const lines = text.split('<:LF:>');
            accum.push(this.renderError(lines.join('\n'), `suite_test_error_${testIndex}`));
            return;
          }

          if (status !== 'failed' && status !== 'passed') return;

          const lineStyle = status === 'failed' ? style.failedTest : style.passedTest;
          accum.push(this.renderTestLine(text, lineStyle, `suite_test_${status}_${testIndex}` ));
          accum.push(this.renderTime(test.time, style.timeTest, `suite_test_time_${testIndex}`));
        });
      }

      if (suite.time) {
        accum.push(this.renderTime(suite.time, style.timeSuite, `suite_time_${suiteIndex}`));
      }

      return accum;
    }, []);
  }

  render() {
    const {show, details, time, passed, failed, errors, outputData} = this.props;

    const secrets = {
      'Phase_1:_Hack_The_Email': 'EPAM',
      'Phase_2:_Fake_ID_Badge': 'SEC',
      'Phase_3:_Configure_&_Install_Keylogger': '2018',
      'Phase_4:_Bypass_Server_Firewall': 'NOW'
    };

    return (
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.headerName}>OUTPUT</span>
          <div className={style.statsWrapper}>
            <span className={style.stat}>Time: {time}</span>
            <span className={style.stat}>Passed: {passed}</span>
            <span className={style.stat}>Failed: {failed}</span>
            <span className={style.stat}>Errors: {errors}</span>
          </div>
        </div>
        {show && <div className={style.info}>
          <p>Secret: <span className={style.code}>{secrets[details]}</span></p>
        </div>}
        <div className={style.output}>
          {this.parseCodewarsOutput(outputData)}
        </div>
      </div>
    );
  }
}

export default Output;
