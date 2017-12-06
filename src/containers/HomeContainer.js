import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import {connect} from 'react-redux';

import TournamentList from '../components/TournamentList/TournamentList';

class HomeContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
      return (
        <Grid>
          <Row>
            <Col md={12}>
              <TournamentList {...this.props} />
            </Col>
          </Row>
        </Grid>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.data
  };
};

export default connect(mapStateToProps)(HomeContainer);
