import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import TournamentFieldsEditor from 'src/client_admin/components/TournamentFieldsEditor';
import JoinedUsers from 'src/client_admin/components/JoinedUsersSection';
import Loader from 'src/client/components/Loader';
import {
  tournamentsByIdRequest,
  tournamentUpdate,
  tournamentDelete,
  tournamentAdd
} from 'src/client/actions/action_creators/tournamentActionCreators';

import style from './style.scss';
import {Button} from 'src/client/components/Common';

class EditTournamentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      startDate: '',
      endDate: '',
      language: '',
      description: '',
      tags: [],
      difficulty: '',
      department: '',
      isEditMode: false
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    const requestData = {id: `${id}?populateField=taskIds`};

    if (id) {
      this.setState({isEditMode: true});
      this.props.tournamentsByIdRequest(requestData);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {tournamentById} = nextProps;

    this.setTournamentState(tournamentById);
  }

  handleTitleChanges = (newName) => {
    this.setState({name: newName});
  };

  handleStartDateChanges = (newDate) => {
    this.setState({startDate: newDate});
  };

  handleEndDateChanges = (newDate) => {
    this.setState({endDate: newDate});
  };

  handleDifficultyChanges = (newDifficulty) => {
    this.setState({difficulty: newDifficulty});
  };

  handleLanguageChanges = (newLanguage) => {
    this.setState({language: newLanguage});
  };

  handleAuthorNameChanges = (newAuthor) => {
    this.setState({department: newAuthor});
  };

  handleTaskDescriptionChanges = (newDescription) => {
    this.setState({description: newDescription});
  };

  handleTagsListChanges = (newTagsList) => {
    this.setState({tags: newTagsList});
  };

  replaceIllegalChars(string, replaceTo) {
    const regexp = new RegExp('[^a-zA-Z0-9/-]+', 'g');
    return string.replace(regexp, replaceTo);
  }

  setTournamentState(tournamentById) {
    this.setState({
      name: tournamentById ? tournamentById.name : '',
      startDate: tournamentById ? tournamentById.startDate : '',
      endDate: tournamentById ? tournamentById.endDate : '',
      language: tournamentById ? tournamentById.language : '',
      department: tournamentById ? tournamentById.department : '',
      description: tournamentById ? tournamentById.description : '',
      tags: tournamentById ? tournamentById.tags : [],
      difficulty: tournamentById ? tournamentById.difficulty : ''
    });
  }

  deleteTournament = (e) => {
    e.preventDefault();
    const {tournamentDelete, tournamentById} = this.props;
    tournamentDelete(tournamentById.id);
    this.props.history.push(
      this.props.match.url.replace(`/${tournamentById.id}/edit_tournament`, ''));
  };

  cancelChanges = (e) => {
    e.preventDefault();
    const {tournamentById} = this.props;
    this.setTournamentState(tournamentById);
  };

  saveChanges = (e) => {
    e.preventDefault();
    let {tournamentUpdate, tournamentAdd, tournamentById} = this.props;

    if (!tournamentById || !this.state.isEditMode) {
      tournamentById = this.state;
    }

    const {
      name, startDate, endDate, language, department,
      description, tags, difficulty
    } = this.state;

    const dataToSend = {
      ...tournamentById,
      title:
        this.replaceIllegalChars(name === '' ? tournamentById.name : name, ' ')
          .toLowerCase(),
      id:
        this.replaceIllegalChars(name === '' ? tournamentById.name : name, '_'),
      status: !this.state.isEditMode ? 'Started': tournamentById.status,
      name: name === '' ? tournamentById.name : name,
      startDate: startDate === '' ? tournamentById.startDate : startDate,
      endDate: endDate === '' ? tournamentById.endDate : endDate,
      language: language === '' ? tournamentById.language : language,
      department: department === '' ? tournamentById.department : department,
      description: description === '' ? tournamentById.description : description,
      tags: tags.length ? tournamentById.tags : [],
      difficulty: difficulty === '' ? tournamentById.difficulty : difficulty
    };

    this.state.isEditMode ?
      tournamentUpdate(dataToSend) : tournamentAdd(dataToSend);
  };

  renderData() {
    const {
      name, startDate, endDate, language, department,
      description, tags, difficulty
    } = this.state;

    return (
      <div className={style.container}>
        <div className={style.dataContainer}>
          <form className={style.form}>
            <div className={style.wrapper}>
              <div className={style.col}>
                <TournamentFieldsEditor
                  name={name} startDate={startDate} endDate={endDate}
                  language={language} description={description}
                  tags={tags} difficulty={difficulty} author={department}
                  onTitleChanges={this.handleTitleChanges}
                  onStartDateChanges={this.handleStartDateChanges}
                  onEndDateChanges={this.handleEndDateChanges}
                  onDifficultyChanges={this.handleDifficultyChanges}
                  onLanguageChanges={this.handleLanguageChanges}
                  onAuthorNameChanges={this.handleAuthorNameChanges}
                  onTaskDescriptionChanges={this.handleTaskDescriptionChanges}
                  onTagsListChanges={this.handleTagsListChanges}
                />
              </div>
              <div className={style.col}>
                <JoinedUsers />
              </div>
            </div>
            <div className={style.actions}>
              <Button mod="warn" onClick={this.deleteTournament}>DELETE TOURNAMENT</Button>
              <Button mod="cancel" onClick={this.cancelChanges}>CANCEL</Button>
              <Button mod="success" onClick={this.saveChanges}>
                {this.state.isEditMode ? 'SAVE CHANGES' : 'SAVE'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={style.mainWrapper}>
        {
          this.props.tournamentsLoading
            ? <Loader />
            : this.renderData()
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tournamentById: state.tournaments.tournamentById,
    tournamentsLoading: state.tournaments.isLoading
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({
    tournamentsByIdRequest,
    tournamentUpdate,
    tournamentDelete,
    tournamentAdd
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(EditTournamentContainer));
