import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  ProfileDetails,
  TasksStatistic,
  TournamentsStatistic,
  UnfinishedActivity,
  SolvedTasksStat
} from '../../components/Profile';

import style from './style.scss';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tournamentsMetrics = {
      participated: 57,
      finished: 21,
      wins: 3,
      satisfation: '67%'
    };

    const tasksMetrics = {
      assigned: 269,
      trained: 230,
      solved: 156,
      totalAttempts: 1921
    };

    // TODO
    const profileDetails = {
      firstName: 'Evgeny',
      lastName: 'Tartakovskiy',
      email: 'evgeny_tartakovskiy@epam.com',
      phoneNumber: '89251234567',
      country: 'Russia'
    };

    return (
      <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <div className={style.statisticsContainer}>
            <TasksStatistic
              metrics={tasksMetrics}
            />
            <TournamentsStatistic
              metrics={tournamentsMetrics}
            />
            <UnfinishedActivity/>
            <SolvedTasksStat/>
          </div>
          <div className={style.detailsContainer}>
            <ProfileDetails
              rankPosition={102}
              totalRankPosition={654}
              totalScore={190354}
              profileDetails={profileDetails}
            />
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
