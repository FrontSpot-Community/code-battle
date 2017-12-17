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

    renderMenuItems = (items) => {
        return items.map((item) => (
            <MenuItem eventKey={item}>{item}</MenuItem>
        ));
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
                        {this.renderMenuItems(['JavaScript', 'CSS', 'HTML'])}
                    </DropdownButton>
                    <DropdownButton
                        title={`Theme: ${this.state.theme}`}
                        key={'dropdown-theme'}
                        onSelect={this.setTheme}
                    >
                        {this.renderMenuItems([
                            'Twilight',
                            'Tomorrow',
                            'Monokai'
                        ])}
                    </DropdownButton>
                    <DropdownButton
                        title={`Font size: ${this.state.fontSize}`}
                        key={'dropdown-fontSize'}
                        onSelect={this.setFontSize}
                    >
                        {this.renderMenuItems([14, 16, 18, 20])}
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
