import React, {Component} from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';

import 'brace/theme/twilight';
import 'brace/theme/monokai';
import 'brace/theme/tomorrow';

export default class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'JavaScript',
      theme: 'monokai',
      fontSize: 14,
      highlightActiveLine: true
    };
  }

  render() {
    return (
      <AceEditor
        value={this.props.value}
        mode={this.state.mode.toLowerCase()}
        theme={this.state.theme.toLowerCase()}
        fontSize={this.state.fontSize}
        highlightActiveLine={this.state.highlightActiveLine}
        width={'100%'}
        height={'100%'}
        onChange={this.props.onCodeEditorChange}
      />
    );
  }
}
