import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import AceEditor from 'react-ace';
import style from './codeEditor.scss';

import 'brace/mode/javascript';
import 'brace/theme/twilight';

export default class CodeEditor extends Component {
    render() {
        return (
            <Col className={style.codeEditorContainer} md={7}>
                <AceEditor
                    mode="javascript"
                    theme="twilight"
                    width={ '100%' }
                    height={ '50vh' }
                />
            </Col>
        );
    }
}
