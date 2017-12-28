import React from 'react';

import style from './style.scss';
import logo from 'src/assets/images/logo.svg';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.header}>
            <img className={style.logo} src={logo} width='64px' height='61.3px' />
            <h1 className={style.headerText}>Code battle</h1>
          </div>
          <div className={style.body}>
            <div className={style.welcome}>
              <p>Welcome Hero!</p>
              <p>Please choose account to sign in</p>
              <a href="http://localhost:3002/auth/github">LOGIN WITH GITHUB</a>
            </div>
            <div className={style.buttons}>
            </div>
            <a className={style.support} href='#'>Support & Troubleshooting</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
