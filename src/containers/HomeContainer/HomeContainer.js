import React from 'react';
import style from './style.scss';
import {connect} from 'react-redux';

import TournamentTable from '../../components/TournamentTable';
import Tabs from '../../components/Tabs';
import Rank from '../../components/Rank';
import avatar from '../../assets/flip.jpg';

const userScoreList = [
    {
        username: 'Konstantin-Paulukave',
        totalScore: 203459,
        avatar
    },
    {
        username: 'Egor-Tsukanov',
        totalScore: 203459,
        avatar
    },
    {
        username: 'Konstantin-Paulukave',
        totalScore: 203459,
        avatar
    },
    {
        username: 'Konstantin-Paulukave',
        totalScore: 203459,
        avatar
    },
    {
        username: 'Konstantin-Paulukave',
        totalScore: 203459,
        avatar
    },
    {
        username: 'Konstantin-Paulukave',
        totalScore: 203459,
        avatar
    },
    {
        username: 'Konstantin-Paulukave',
        totalScore: 203459,
        avatar
    }
];

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className={style.wrapper}>
            <div className={style.tableContainer}>
                <Tabs/>
                <TournamentTable tournaments={this.props.tournaments}/>
            </div>
            <div className={style.rankContainer}>
                <Rank rankPosition={102}
                      totalRankPosition={654}
                      totalScore={190354}
                      userScoreList={userScoreList}/>
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

export default connect(mapStateToProps)(HomeContainer);
