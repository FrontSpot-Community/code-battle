import React, {Component} from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/twilight';

export default class CodeEditor extends Component {
    render() {
        return (
            <AceEditor
                mode="javascript"
                theme="twilight"
                width={ '100%' }
                height={ '80vh' }
            />
        );
    }
}
