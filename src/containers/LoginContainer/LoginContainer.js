import React from 'react';
import {connect} from 'react-redux';

import style from './style.scss';
import logo from 'src/assets/images/logo.svg';
import ButtonsBlock from './ButtonsBlock';
import FormBlock from './FormBlock';
import {epamLogin} from '../../actions/action_creators/userActionCreators';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      epamLoginForm: false,
      epamEmail: '',
      epamPassword: ''
    };
  }

  onEpamLoginForm = () => {
    this.setState({epamLoginForm: !this.state.epamLoginForm});
  }

  onSendEpam = (e) => {
    e.preventDefault();
    this.props.epamLogin({email: this.state.epamEmail, password: this.state.epamPassword});
  }

  onChangeEpamEmail = ({target}) => {
    this.setState({epamEmail: target.value});
  }

  onChangeEpamPassword = ({target}) => {
    this.setState({epamPassword: target.value});
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.header}>
            <img className={style.logo} src={logo} width='64px' height='61.3px' />
            <h1 className={style.headerText}>Code battle</h1>
          </div>
          {this.state.epamLoginForm
            ? <FormBlock
              onEpamLoginForm={this.onEpamLoginForm}
              onSendEpam={this.onSendEpam}
              onChangeEpamEmail={this.onChangeEpamEmail}
              onChangeEpamPassword={this.onChangeEpamPassword}
              epamEmail={this.state.epamEmail}
              epamPassword={this.state.epamPassword}
            />
            : <ButtonsBlock onEpamLoginForm={this.onEpamLoginForm} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapActionsToProps = {
  epamLogin
};

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);
