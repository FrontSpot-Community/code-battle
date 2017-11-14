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
            value: this.props.value,
            mode: this.props.mode,
            theme: this.props.theme,
            fontSize: this.props.fontSize,
            highlightActiveLine: this.props.highlightActiveLine
        };
    }

    onChange = (newValue) => {
        this.setState({
            value: newValue
        });
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
                <ButtonGroup block>
                    <DropdownButton
                        id={'dropdown-language'}
                        key={'dropdown-language'}
                        title={`Language: ${this.state.mode}`}
                        bsSize={'large'}
                        onSelect={this.setMode}
                    >
                        <MenuItem eventKey={'JavaScript'}>
                            JavaScript
                        </MenuItem>
                        <MenuItem eventKey={'CSS'}>CSS</MenuItem>
                        <MenuItem eventKey={'HTML'}>HTML</MenuItem>
                    </DropdownButton>
                    <DropdownButton
                        id={'dropdown-theme'}
                        key={'dropdown-theme'}
                        title={`Theme: ${this.state.theme}`}
                        bsSize={'large'}
                        onSelect={this.setTheme}
                    >
                        <MenuItem eventKey={'Twilight'}>Twilight</MenuItem>
                        <MenuItem eventKey={'Tomorrow'}>Tomorrow</MenuItem>
                        <MenuItem eventKey={'Monokai'}>Monokai</MenuItem>
                    </DropdownButton>
                    <DropdownButton
                        id={'dropdown-fontSize'}
                        key={'dropdown-fontSize'}
                        title={`Font size: ${this.state.fontSize}`}
                        bsSize={'large'}
                        onSelect={this.setFontSize}
                    >
                        <MenuItem eventKey={14}>14</MenuItem>
                        <MenuItem eventKey={16}>16</MenuItem>
                        <MenuItem eventKey={18}>18</MenuItem>
                        <MenuItem eventKey={20}>20</MenuItem>
                    </DropdownButton>
                </ButtonGroup>
                <h3>Solution:</h3>
                <AceEditor
                    value={this.state.value}
                    mode={this.state.mode.toLowerCase()}
                    theme={this.state.theme.toLowerCase()}
                    fontSize={this.state.fontSize}
                    highlightActiveLine={this.state.highlightActiveLine}
                    width={'100%'}
                    height={'44vh'}
                    showPrintMargin={false}
                    onChange={this.onChange}
                />
                <h3>Sample Tests:</h3>
                <AceEditor
                    value={this.state.value}
                    mode={this.state.mode.toLowerCase()}
                    theme={this.state.theme.toLowerCase()}
                    fontSize={this.state.fontSize}
                    highlightActiveLine={this.state.highlightActiveLine}
                    width={'100%'}
                    height={'20vh'}
                    showPrintMargin={false}
                    onChange={this.onChange}
                />
            </section>
        );
    }
}
