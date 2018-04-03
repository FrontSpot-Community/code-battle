import React from 'react';

import style from './style.scss';
import github from './assets/github-logo.svg';
import epam from './assets/epam-logo.png';
import {Button} from 'src/components/Common';

const ButtonsBlock = (props) => {
  return (
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
            <img src={github} width='24px' height='24px' />,
            <span>GITHUB</span>
          ]}
        </Button>
        <Button
          mod='epamLogin'
          onClick={props.onEpamLoginForm}
        >
          {[
            <img src={epam} width='66px' height='24px' />
          ]}
        </Button>
      </div>
      <a className={style.support} href='#'>Support & Troubleshooting</a>
    </div>
  );
};

export default ButtonsBlock;
