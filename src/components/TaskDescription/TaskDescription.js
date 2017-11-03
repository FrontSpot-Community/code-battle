import React, {Component} from 'react';
import {Col, Tabs, Tab} from 'react-bootstrap';

import InfoRow from './components/InfoRow';
import Description from './components/Description';
import Output from './components/Output';

import style from './taskDescription.scss';

export default class TaskDescription extends Component {
    render() {
        return (
            <Col className={style.taskDescriptionContainer} md={5}>
                <InfoRow />
                <Tabs defaultActiveKey={1}>
                    <Tab
                        eventKey={1}
                        title="Description"
                         tabClassName={style.tabTitle}
                    >
                        <Description />
                    </Tab>
                    <Tab
                        eventKey={2}
                        title="Output"
                        tabClassName={style.tabTitle}
                    >
                        <Output />
                    </Tab>
                </Tabs>
            </Col>
        );
    }
}
