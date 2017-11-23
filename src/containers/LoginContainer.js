import React from 'react';
import {Login} from '../components/Common';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

export default class LoginContainer extends React.Component {
    render() {
        return (
          <Grid>
            <Row >
              <Col md={12}>
                  <Login />
              </Col>
            </Row>
          </Grid>
        );
    }
}
