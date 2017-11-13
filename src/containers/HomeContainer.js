import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import TourList from '../components/TourList/TourList';

export default class HomeContainer extends React.Component {
  constructor() {
    super();

    // For testing
    this.state = {
      battles: [
        {
          battleId: 'js',
          battleTitle: 'Javascript',
          battleCat: 'js',
          battleImage: '',
          battleDesc: ''
        }
      ]
    };
  }

  render() {
      return (
        <Grid>
          <Row >
            <Col xs={12} sm={6} md={10} lg={10}>
              <TourList {...this.state} />
            </Col>
          </Row>
        </Grid>
      );
  }
}
