import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {tournamentsRequest} from 'src/client/actions/action_creators/tournamentActionCreators';
import httpClient from 'src/common/services/httpClient/index';
import {SEC_ENDPOINT} from 'src/common/endpoints/index';

import {SolutionInput, Screencast} from 'src/client/components/Sec';

import style from './style.scss';

const initialInputs = {
  firstInput: '',
  secondInput: '',
  thirdInput: '',
  fourthInput: ''
};

class SecContainer extends Component {
  state = {
    inputs: initialInputs,
    loading: false,
    status: ''
  };

  componentWillMount() {
    this.props.tournamentsRequest();
  }

  onChangeInput = (item) => (value) =>
    this.setState({inputs: {...this.state.inputs, [item]: value}});

  onSendInputs = (e) => {
    e.preventDefault();
    const {user} = this.props;
    const {firstInput, secondInput, thirdInput, fourthInput} = this.state.inputs;
    this.setState({loading: true});
    httpClient.post(SEC_ENDPOINT, {sheet: {
      githubId: user.githubId,
      githubUsername: user.githubUsername,
      Email: user.email,
      Phrase: `${firstInput.trim()} ${secondInput.trim()} ${thirdInput.trim()} ${fourthInput.trim()}`
    }})
      .then(() => this.setState({status: 'success', inputs: initialInputs, loading: false}))
      .catch(() => this.setState({loading: false, status: 'error'}));
  };

  render() {
    return this.props.userLoading || this.state.loading
      ? <div className={style.loader} />
      : <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          {/* <div className={style.content}> */}
          <SolutionInput
            onChange={this.onChangeInput}
            values={this.state.inputs}
            onSubmit={this.onSendInputs}
            status={this.state.status}
          />
          <Screencast />
          {/* </div> */}
        </div>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.userInfo,
    tournaments: state.tournaments.data,
    userLoading: state.user.isLoading
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({tournamentsRequest}, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(SecContainer);
