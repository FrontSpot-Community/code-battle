import React from 'react';
import {connect} from 'react-redux';

import {BattleTable, Summary} from 'src/components/Battle';
import style from './style.scss';
import sorts from './sorts';

const mixIcon = (val) => <span>{val}<i className={'glyphicon glyphicon-triangle-bottom'}/></span>;

const headerCells = [
  {
    value: <span className={style.unsortedTH}>Title</span>,
    propName: 'title',
    sorted: false
  },
  {
    value: mixIcon('Difficulty'),
    propName: 'difficulty',
    sorted: true
  },
  {
    value: mixIcon('Value'),
    propName: 'stars',
    sorted: true
  },
  {
    value: mixIcon('Satisfaction'),
    propName: 'satisfaction',
    sorted: true
  },
  {
    value: mixIcon('Solved by'),
    propName: 'solvedBy',
    sorted: true
  },
  {
    value: mixIcon('Status'),
    propName: 'status',
    sorted: true
  }
];

class BattleContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      existionChecked: false,
      tasks: [],
      tournament: {},
      difficultyNextSortIncr: false,
      starsNextSortIncr: false,
      satisfactionNextSortIncr: false,
      solvedByNextSortIncr: false,
      statusNextSortIncr: false
    };
  }

  onClickSort = (identifier) => {
    const tasks = [...this.state.tasks];
    sorts[identifier](tasks, this.state[`${identifier}NextSortIncr`]);
    const newState = {};
    newState[`${identifier}NextSortIncr`] = !this.state[`${identifier}NextSortIncr`];
    newState.tasks = tasks;
    this.setState(newState);
  };

  getTasks() {
    const battleId = this.props.match.params.id;
    const tournament = this.props.tournaments.filter((tournament) => {
      return tournament.id === battleId;
    });
    if (!tournament.length) {
      this.props.history.push('/about');
    }
    this.setState({
      existionChecked: true,
      tasks: tournament[0].tasks,
      tournament: tournament[0]
    });
  }

  renderData() {
    if (!this.state.existionChecked) {
      this.getTasks();
      return;
    }
    const nextSorts = {
      difficulty: this.state.difficultyNextSortIncr,
      stars: this.state.starsNextSortIncr,
      satisfaction: this.state.satisfactionNextSortIncr,
      solvedBy: this.state.solvedByNextSortIncr,
      status: this.state.statusNextSortIncr
    };
    return (
      <div className={style.wrapper}>
        <div className={style.tableContainer}>
          <BattleTable
            headerCells={headerCells}
            tasks={this.state.tasks}
            onClickSort={this.onClickSort}
            nextSorts={nextSorts}
            preLink={this.state.tournament.id}
          />
        </div>
        <div className={style.summaryContainer}>
          <Summary
            status='Started'
            tournament={this.state.tournament}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={style.mainWrapper}>
        {
          this.props.tournamentsLoading
            ? <div className={style.loader} />
            : this.renderData()
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.data,
    tournamentsLoading: state.tournaments.isLoading
  };
};

export default connect(mapStateToProps)(BattleContainer);
