import React from 'react';
import style from './style.scss';
import {Button} from 'react-bootstrap';

export default class About extends React.Component {
    render() {
        return (
            <div className={style.test}>About!
                <Button bsStyle="primary">Test</Button>
            </div>
        );
    }
}
