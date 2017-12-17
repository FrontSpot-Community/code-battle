import React from 'react';
import style from './style.scss';
import {connect} from 'react-redux';

import TournamentTable from '../../components/TournamentTable';
import Tabs from '../../components/Tabs';
import Rank from '../../components/Rank';

import userScoreList from './mockUsers';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.wrapper}>

                <TournamentTable tournaments={this.props.tournaments}
                                 render={() => (<Tabs/>)}/>

                <Rank rankPosition={102}
                      totalRankPosition={654}
                      totalScore={190354}
                      userScoreList={userScoreList}/>
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
