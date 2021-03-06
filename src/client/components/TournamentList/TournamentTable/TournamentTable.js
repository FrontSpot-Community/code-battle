import React, {Component} from 'react';
import TournamentTableHeadRow from '../TournamentTableHeadRow';
import TournamentTableRow from '../TournamentTableBodyRow';
import IconInput from 'src/client/components/Common/IconInput';
import style from './style.scss';

export default class TournamentTable extends Component {
  renderRows = (tournaments) => {
    const mapHandler = (tournament, headerCellNames) => (
      <TournamentTableRow tournament={tournament}
        headerCells={headerCellNames}
        key={tournament.id}
        adminMode={this.props.adminMode}/>
    );
    return tournaments.map(mapHandler);
  };

  render() {
    const {tournaments} = this.props;

    return (
      <div className={style.wrapper}>
        <TournamentTableHeadRow headerCells={headerCellNames}/>
        <section className={style.body}>
          {this.renderRows(tournaments, headerCellNames)}
        </section>
      </div>
    );
  }
}

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

