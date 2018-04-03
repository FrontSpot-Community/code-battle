import React from 'react';

import style from './style.scss';
import {Button} from 'src/components/Common';
import FormItem from './FormItem';

const FormBlock = (props) => {
  return (
    <form className={style.body} onSubmit={props.onSendEpam}>
      <div className={style.welcome}>
        <p>Please, enter your EPAM email and password</p>
      </div>
      <div className={style.formInputs}>
        <FormItem
          label='Email'
          type='email'
          value={props.epamEmail}
          onChange={props.onChangeEpamEmail}
        />
        <FormItem
          label='Password'
          type='password'
          value={props.epamPassword}
          onChange={props.onChangeEpamPassword}
        />
      </div>
      <div className={style.buttons} style={{marginBottom: 0}}>
        <Button
          onClick={props.onEpamLoginForm}
          mod='cancel'
        >
          Cancel
        </Button>
        <Button
          mod='success'
          type='submit'
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default FormBlock;
