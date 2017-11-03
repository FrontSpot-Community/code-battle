import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import {TaskDescription} from '../components';


export default class TaskPage extends Component {
    render() {
        return (
            <Grid fluid={true}>
                <Row className="showGrid">
                    <TaskDescription />
                </Row>
            </Grid>
        );
    }
}
