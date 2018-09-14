import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {tournamentsRequest} from 'src/client/actions/action_creators/tournamentActionCreators';

import {
  TournamentScore,
  LanguagesParticipants,
  LanguagesTasks
} from 'src/client/components/Sec';

import style from './style.scss';

class SecContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.tournamentsRequest();
  }

  render() {
    const places = {
      '1': {name: '1st'},
      '2': {name: '2nd'},
      '3': {name: '3rd'},
      '4': {name: '4th'},
      '5': {name: '5th'},
      '6': {name: '6th'},
      '7': {name: '7th'},
      '8': {name: '8th'},
      '9': {name: '9th'},
      '10': {name: '10th'}
    };

    const tournaments = {
      'javaScript': {
        '1': {name: 'John 1'},
        '2': {name: 'John 2'},
        '3': {name: 'John 3'},
        '4': {name: 'John 4'},
        '5': {name: 'John 5'},
        '6': {name: 'John 6'},
        '7': {name: 'John 7'},
        '8': {name: 'John 8'},
        '9': {name: 'John 9'},
        '10': {name: 'John 10'}
      },
      'python': {
        '1': {name: 'David 1'},
        '2': {name: 'David 2'},
        '3': {name: 'David 3'},
        '4': {name: 'David 4'},
        '5': {name: 'David 5'},
        '6': {name: 'David 6'},
        '7': {name: 'David 7'},
        '8': {name: 'David 8'},
        '9': {name: 'David 9'},
        '10': {name: 'David 10'}
      },
      'csharp': {
        '1': {name: 'Peter 1'},
        '2': {name: 'Peter 2'},
        '3': {name: 'Peter 3'},
        '4': {name: 'Peter 4'},
        '5': {name: 'Peter 5'},
        '6': {name: 'Peter 6'},
        '7': {name: 'Peter 7'},
        '8': {name: 'Peter 8'},
        '9': {name: 'Peter 9'},
        '10': {name: 'Peter 10'}
      },
      'java': {
        '1': {name: 'Mark 1'},
        '2': {name: 'Mark 2'},
        '3': {name: 'Mark 3'},
        '4': {name: 'Mark 4'},
        '5': {name: 'Mark 5'},
        '6': {name: 'Mark 6'},
        '7': {name: 'Mark 7'},
        '8': {name: 'Mark 8'},
        '9': {name: 'Mark 9'},
        '10': {name: 'Mark 10'}
      },
      'php': {
        '1': {name: 'Steve 1'},
        '2': {name: 'Steve 2'},
        '3': {name: 'Steve 3'},
        '4': {name: 'Steve 4'},
        '5': {name: 'Steve 5'},
        '6': {name: 'Steve 6'},
        '7': {name: 'Steve 7'},
        '8': {name: 'Steve 8'},
        '9': {name: 'Steve 9'},
        '10': {name: 'Steve 10'}
      }
    };

    const headerCells = {
      position: 'Position',
      javascript: 'JavaScript',
      python: 'Python',
      csharp: 'C#',
      java: 'Java',
      php: 'PHP'
    };

    const participantsMetrics = {
      javaScript: 57,
      python: 21,
      csharp: 3,
      java: 50,
      php: 35
    };

    const tasksMetrics = {
      javaScript: 20,
      python: 26,
      csharp: 14,
      java: 5,
      php: 18
    };

    const colorsMap = {
      javaScript: '#f39c12',
      python: '#a6c638',
      csharp: '#9f37b7',
      java: '#e74c3c',
      php: '#39c2d7'
    };

    return this.props.userLoading
      ? <div className={style.loader} />
      : <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <div className={style.resultsContainer}>
            <TournamentScore
              headerCells={headerCells}
              places={places}
              tournaments={tournaments}
            />
          </div>
          <div className={style.chartsContainer}>
            <div className={style.charts}>
              <LanguagesParticipants
                metrics={participantsMetrics}
                colors={colorsMap}
                headerCells={headerCells}/>
              <LanguagesTasks metrics={tasksMetrics} colors={colorsMap} />
            </div>
          </div>
        </div>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.data,
    userLoading: state.user.isLoading
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({tournamentsRequest}, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(SecContainer);
