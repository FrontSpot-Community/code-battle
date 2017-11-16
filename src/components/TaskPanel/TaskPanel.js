import React from 'react';
import {Grid, Row, Col, ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TaskSummary from '../TaskSummary';
import style from './style.scss';

const TaskPanel = ({match}) => {
    const renderButtons = ({url}) => (
        <ButtonToolbar>
            <Link to={`${url}/train`} className={'btn btn-default'}> Train</Link>
            <Link to={'home'} className={'btn btn-default'}>Next Task</Link>
        </ButtonToolbar>
    );

   return (
           <Grid className={style.panel}>
               <Row>
                   <Col md={4}>
                       <TaskSummary taskName={match.params.taskId}/>
                   </Col>
                   <Col md={4}> </Col>
                   <Col md={4}> {renderButtons(match)}</Col>
               </Row>
           </Grid>
   );
};


export default TaskPanel;
