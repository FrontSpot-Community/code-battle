import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {BattleTable, Summary} from 'src/components/Battle';
import {tournamentsByIdRequest} from 'src/actions/action_creators/tournamentActionCreators';
import {tasksByIdRequest} from 'src/actions/action_creators/taskActionCreators';
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
      tournament: {
        tags: [],
        taskIds: []
      },
      difficultyNextSortIncr: false,
      starsNextSortIncr: false,
      satisfactionNextSortIncr: false,
      solvedByNextSortIncr: false,
      statusNextSortIncr: false
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    const requestData = {id: `${id}?populateField=taskIds`};
    this.props.tournamentsByIdRequest(requestData);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (!nextProps.tournamentsLoading) {
  //     this.props.tasksByIdRequest(nextProps.tournamentById.tasks);
  //   }
  // }
  //
  // onClickSort = (identifier) => {
  //   const tasks = [...this.state.tasks];
  //   sorts[identifier](tasks, this.state[`${identifier}NextSortIncr`]);
  //   const newState = {};
  //   newState[`${identifier}NextSortIncr`] = !this.state[`${identifier}NextSortIncr`];
  //   newState.tasks = tasks;
  //   this.setState(newState);
  // };

  renderData() {
    const tournament = this.props.tournamentById;

    // const nextSorts = {
    //   difficulty: this.state.difficultyNextSortIncr,
    //   stars: this.state.starsNextSortIncr,
    //   satisfaction: this.state.satisfactionNextSortIncr,
    //   solvedBy: this.state.solvedByNextSortIncr,
    //   status: this.state.statusNextSortIncr
    // };

    return (
      <div className={style.wrapper}>
        {/* <div className={style.tableContainer}>
          <BattleTable
            headerCells={headerCells}
            tasks={tournament.taskIds}
            onClickSort={this.onClickSort}
            nextSorts={nextSorts}
            preLink={tournament.id}
          />
        </div>
        <div className={style.summaryContainer}>
          <Summary
            status='Started'
            tournament={tournament}
          />
        </div> */}
      </div>
    );
  }

  render() {
    return (
      <div className={style.mainWrapper}>
        {/* {
          !this.props.tournamentById
            ? <div className={style.loader} />
            : this.renderData()
        } */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.data,
    tournamentById: state.tournaments.tournamentById,
    tournamentsLoading: state.tournaments.isLoading,
    tasks: state.tasks.tasksById
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({tournamentsByIdRequest, tasksByIdRequest}, dispatch)
);

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(BattleContainer));
