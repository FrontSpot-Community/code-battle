import React, {Component} from 'react';
import AceEditor from 'react-ace';

// Languages
import 'brace/mode/php';
import 'brace/mode/javascript';

// Color Themes
import 'brace/theme/twilight';

const MODS = {
  javascript: 'javascript',
  // php mode wasn't working correctly during test
  // so javascript one looks better then others for highlighting php code
  php: 'javascript'
};

export default class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: MODS[props.language] || MODS.javascript,
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
        setOptions={{useWorker: false}}
        onChange={this.props.onCodeEditorChange}
      />
    );
  }
}
