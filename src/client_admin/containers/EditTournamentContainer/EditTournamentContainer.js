import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import TournamentFieldsEditor from 'src/client_admin/components/TournamentFieldsEditor';
import JoinedUsers from 'src/client_admin/components/JoinedUsersSection';
import Loader from 'src/client/components/Loader';
import {tournamentsByIdRequest} from 'src/client/actions/action_creators/tournamentActionCreators';
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
      author: ''
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    const requestData = {id: `${id}?populateField=taskIds`};
    this.props.tournamentsByIdRequest(requestData);
  }

  componentWillReceiveProps(nextProps) {
    const {tournamentById} = nextProps;

    this.setState({
      name: tournamentById ? tournamentById.name : '',
      startDate: tournamentById ? tournamentById.startDate : '',
      endDate: tournamentById ? tournamentById.endDate : '',
      language: tournamentById ? tournamentById.language : '',
      author: tournamentById ? tournamentById.department : '',
      description: tournamentById ? tournamentById.description : '',
      tags: tournamentById ? tournamentById.tags : [],
      difficulty: tournamentById ? tournamentById.difficulty : ''
    });
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
    this.setState({author: newAuthor});
  };

  handleTaskDescriptionChanges = (newDescription) => {
    this.setState({description: newDescription});
  };

  handleTagsListChanges = (newTagsList) => {
    this.setState({tags: newTagsList});
  };

  deleteTournament = () => {

  };


  cancelChanges = () => {

  };

  saveChanges = () => {

  };

  renderData() {
    const {
      name, startDate, endDate, language, author,
      description, tags, difficulty
    } = this.state;

    const tournament = this.props.tournamentById;
    if (!tournament) return null;

    return (
      <div className={style.container}>
        <div className={style.dataContainer}>
          <form className={style.form}>
            <div className={style.wrapper}>
              <div className={style.col}>
                <TournamentFieldsEditor
                  name={name} startDate={startDate} endDate={endDate}
                  language={language} description={description}
                  tags={tags} difficulty={difficulty} author={author}
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
          !this.props.tournamentById || this.props.tournamentsLoading
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
  bindActionCreators({tournamentsByIdRequest}, dispatch)
);

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(EditTournamentContainer));