import React from 'react';
import {connect} from 'react-redux';

import {
  ProfileDetails,
  TasksStatistic,
  TournamentsStatistic,
  UnfinishedActivity
} from '../../components/Profile';


import style from './style.scss';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <div className={style.statisticsContainer}>
            <TasksStatistic/>
            <TournamentsStatistic/>
            <UnfinishedActivity/>
          </div>
          <div className={style.detailsContainer}>
            <ProfileDetails/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.data
  };
};

// const mapActionsToProps = (dispatch) => (
//   bindActionCreators({tournamentsRequest}, dispatch)
// );

export default connect(mapStateToProps)(ProfileContainer);
