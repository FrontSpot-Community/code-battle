import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import {connect} from 'react-redux';

import TourList from '../components/TourList/TourList';

class HomeContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
      return (
        <Grid>
          <Row >
            <Col xs={12} sm={6} md={10} lg={10}>
              <TourList {...this.props} />
            </Col>
          </Row>
        </Grid>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tours: state.tours
  };
};

export default connect(mapStateToProps)(HomeContainer);
