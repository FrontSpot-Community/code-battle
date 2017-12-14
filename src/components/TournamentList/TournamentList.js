import React, {Component} from 'react';
import Tournament from '../Tournament/Tournament';
import IconInput from '../Common/IconInput';

import style from './style.scss';

const headerCellNames = [
    {
        displayName: 'Tasks',
        propName: 'numberOfTasks'
    },
    {
        displayName: 'Difficulty',
        propName: 'difficulty'
    },
    {
        displayName: 'Language',
        propName: 'language'
    },
    {
        displayName: 'Created By Team',
        propName: 'createdByTeam'
    },
    {
        displayName: 'Status',
        propName: 'status'
    }
];

export default class TournamentList extends Component {
    renderHeader = () => {
        return (
            <div className={style.headers}>
                <div className={style.headerCell}>
                    <IconInput placeholder={'Search...'}
                               iconClass={'glyphicon glyphicon-search'}/>
                </div>
                {headerCellNames.map((item) => {
                    return (
                        <div className={style.headerCell}>
                            <span>{item.displayName}</span>
                            <a className={style.icon}>
                                <i className={
                                    'glyphicon glyphicon-triangle-bottom'
                                }></i>
                            </a>
                        </div>
                    );
                })}
            </div>);
    };
  renderList = () => {
    return this.props.tournaments && this.props.tournaments.map((t) => {
      return (
        <Tournament key={t.id} {...t} />
      );
    });
  };

  render() {
    return (
        <div className={style.wrapper}>
            {this.renderHeader()}

            <div className="tournament-count">
                {this.props.tournaments.length} Tournaments Found
            </div>
            <div className="tournament-list">
                {this.renderList()}
            </div>
        </div>
    );
  }
}
