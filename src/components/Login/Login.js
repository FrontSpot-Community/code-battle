import React from 'react';

import {Logo} from '../Common';
import {
  Button
} from 'react-bootstrap';

import './login.scss';

const Login = () => {
    return (
      <div className="login-form">
        <div className="login-form-entry">
          <div className="login-form-logo">
            <Logo />
          </div>
          <div className="login-form-buttons">
            <div className="login-form-github">
              <Button
                bsStyle="default"
                bsSize="sm"
                block={true}
              >
                Login via Github
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
