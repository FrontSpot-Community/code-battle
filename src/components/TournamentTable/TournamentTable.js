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
        propName: 'numberOfTasks',
        sort: true
    },
    {
        displayName: 'Difficulty',
        propName: 'difficulty',
        sort: true
    },
    {
        displayName: 'Language',
        propName: 'language',
        sort: true
    },
    {
        displayName: 'Created By Team',
        propName: 'createdByTeam',
        disabled: true
    },
    {
        displayName: 'Status',
        propName: 'status',
        sort: true
    }
];

export default class TournamentTable extends Component {
    renderRows = () => {
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
                  <span className={headerCell.disabled && style.disabled}>
                      {headerCell.displayName}
                  </span>
                    {headerCell.sort &&
                    <a className={style.sortIcon}>
                        <i className={'glyphicon glyphicon-triangle-bottom'}/>
                    </a>}
              </span>
            );
        } else {
            return headerCell.component;
        }
    };

    render() {
        return (
            <div className={style.wrapper}>
                {this.props.render()}
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
                    {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}
