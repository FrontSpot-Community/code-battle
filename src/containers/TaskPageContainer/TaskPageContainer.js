import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import {TaskDescription} from '../../components/index';
import style from './taskPageContainer.scss';

export default class TaskPage extends Component {
    render() {
        return (
            <Grid className={style.taskPageContainer} fluid={true}>
                <Row className="showGrid">
                    <TaskDescription />
                    {/* <CodeEditor />*/}
                </Row>
            </Grid>
        );
    }
}
