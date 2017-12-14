import React, {Component} from 'react';
import TournamentRow from '../TournamentRow';
import IconInput from '../Common/IconInput';

import style from './style.scss';

const headerCellNames = [
    {
        component: <IconInput placeholder={'Search...'}
                              iconClass={'glyphicon glyphicon-search'}/>,
        propName: 'tournamentName'

    },
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
  renderList = () => {
    const mapHandler = (tournament) => (
        <TournamentRow key={tournament.id}
                            headerCells={headerCellNames}
                            tournament={tournament}/>
    );

    return this.props.tournaments.map(mapHandler);
  };

  renderTableHeaderCell = (headerCell) => {
      if (headerCell.displayName) {
          return (
              <span>
                  <span>{headerCell.displayName}</span>
                  <a className={style.sortIcon}>
                      <i className={'glyphicon glyphicon-triangle-bottom'}/>
                  </a>
              </span>
          );
      } else {
          return headerCell.component;
      }
  };

  render() {
    return (
        <div className={style.wrapper}>
            <table className={style.table}>
                <thead>
                <tr>
                    {headerCellNames.map((item) => (
                        <th key={item.propName}>
                            {this.renderTableHeaderCell(item)}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {this.renderList()}
                </tbody>
            </table>
        </div>
    );
  }
}
