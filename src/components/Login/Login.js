import React from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';

import './login.scss';

const Login = () => {
  return (
    <div className="login-form">
      <form onSubmit={() => {
      }}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={''}
            onChange={() => {
            }}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={''}
            onChange={() => {
            }}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="submit" bsSize="large">
          <Button
            block
            bsSize="large"
            disabled={false}
            type="submit"
          >
            Login
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default Login;
