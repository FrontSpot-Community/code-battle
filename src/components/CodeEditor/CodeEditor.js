import React, {Component} from 'react';
import {
  ButtonGroup,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';
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
      value: '',
      mode: 'JavaScript',
      theme: 'Twilight',
      fontSize: 16,
      highlightActiveLine: true
    };
  }

  onChange = (newValue) => {
    this.setState({
      value: newValue
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(newValue);
    }
  };

  setMode = (mode) => {
    this.setState({mode});
  };

  setTheme = (theme) => {
    this.setState({theme});
  };

  setFontSize = (fontSize) => {
    this.setState({fontSize});
  };

  render() {
    return (
      <section>
        <ButtonGroup justified>
          <DropdownButton
            title={`Language: ${this.state.mode}`}
            key={'dropdown-language'}
            onSelect={this.setMode}
          >
            <MenuItem eventKey={'JavaScript'}>JavaScript</MenuItem>
            <MenuItem eventKey={'CSS'}>CSS</MenuItem>
            <MenuItem eventKey={'HTML'}>HTML</MenuItem>
          </DropdownButton>
          <DropdownButton
            title={`Theme: ${this.state.theme}`}
            key={'dropdown-theme'}
            onSelect={this.setTheme}
          >
            <MenuItem eventKey={'Twilight'}>Twilight</MenuItem>
            <MenuItem eventKey={'Tomorrow'}>Tomorrow</MenuItem>
            <MenuItem eventKey={'Monokai'}>Monokai</MenuItem>
          </DropdownButton>
          <DropdownButton
            title={`Font size: ${this.state.fontSize}`}
            key={'dropdown-fontSize'}
            onSelect={this.setFontSize}
          >
            <MenuItem eventKey={14}>14</MenuItem>
            <MenuItem eventKey={16}>16</MenuItem>
            <MenuItem eventKey={18}>18</MenuItem>
            <MenuItem eventKey={20}>20</MenuItem>
          </DropdownButton>
        </ButtonGroup>
        <AceEditor
          value={this.state.value}
          mode={this.state.mode.toLowerCase()}
          theme={this.state.theme.toLowerCase()}
          fontSize={this.state.fontSize}
          highlightActiveLine={this.state.highlightActiveLine}
          width={'100%'}
          height={'50vh'}
          onChange={this.onChange}
        />
      </section>
    );
  }
}
