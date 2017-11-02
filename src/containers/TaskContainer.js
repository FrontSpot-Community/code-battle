import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';


export default class TaksContainer extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
      return (
        <Grid>
          <h1>Task : {this.props.match.params.taskId}</h1>
          <Row >
            <Col xs={12} sm={12} md={12} lg={12}>
              Editor and Task Info
            </Col>
          </Row>
        </Grid>
      );
  }
}
