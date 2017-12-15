import React, {Component} from 'react';
import style from './style.scss';

export default class Rank extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.generalScore}>
                    <div className={style.halfOfBlock}>
                        <div className={style.title}>Your Rank Position</div>
                        <div className={style.score}>
                            <span className={style.rankNumber}>
                                {this.props.rankPosition}
                             </span>
                            <span> of {this.props.totalRankPosition}</span>
                        </div>
                    </div>
                    <div className={style.halfOfBlock}>
                        <div className={style.title}>Your Total Score</div>
                        <div className={style.score}>
                            <span> {this.props.totalScore}</span>
                        </div>

                    </div>
                </div>
                <div className={style.userScoreList}>

                </div>

            </div>
        );
    }
}
