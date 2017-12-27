import React, {Component} from 'react';
import AceEditor from 'react-ace';

// Languages
import 'brace/mode/javascript';

// Color Themes
import 'brace/theme/twilight';

export default class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'JavaScript',
      theme: 'twilight',
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
        height={'calc(100% - 58px'}
        onChange={this.props.onCodeEditorChange}
      />
    );
  }
}
