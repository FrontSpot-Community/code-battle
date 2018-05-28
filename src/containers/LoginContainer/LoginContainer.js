import React from 'react';

import style from './style.scss';
import logo from 'src/assets/images/logo.svg';
import github from './assets/github-logo.svg';
import {Button} from 'src/components/Common';

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
            </div>
            <div className={style.buttons}>
              <Button
                mod='githubLogin'
                href={process.env.LOGIN_URL}
              >
                {[
                  <img src={github} width='24px' height='24px' key='githubImage'/>,
                  <span key='span'>GITHUB</span>
                ]}
              </Button>
            </div>
            <a className={style.support} href='#'>Support & Troubleshooting</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
