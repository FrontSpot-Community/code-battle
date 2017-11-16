import React, {Component} from 'react';
import LoadingBar from 'react-redux-loading-bar';

import './progress-bar.scss';

export default class ProgressBar extends Component {
    render() {
        return (
            <LoadingBar className="loading" />
        );
    }
}
