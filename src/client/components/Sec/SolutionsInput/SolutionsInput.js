import React, {Component} from 'react';
import style from './style.scss';

import {Button} from 'src/client/components/Common';

const SingleInput = ({onChange, ...rest}) => (
  <input
    className={style.input}
    type='text'
    onChange={({target: {value}}) => onChange(value)}
    {...rest}
  />
);

export default class SolutionInput extends Component {
  render() {
    const {values, onChange, onSubmit, status} = this.props;
    return (
      <form onSubmit={onSubmit} className={style.wrapper}>
        <p className={style.infotext}>{`You can enter solution codes here. Be carefull, only right answers will go to the final statistics.`}</p>
        {status &&
          <p className={status === 'success' ? style.successStatus : style.errorStatus}>
            {status === 'success' ? 'Solution accepted' : 'Something went wrong'}
          </p>
        }
        <div className={style.inputsWrapper}>
          <SingleInput
            placeholder={'First code'}
            value={values['firstInput']}
            onChange={onChange('firstInput')}
          />
          <SingleInput
            placeholder={'Second code'}
            value={values['secondInput']}
            onChange={onChange('secondInput')}
          />
          <SingleInput
            placeholder={'Third code'}
            value={values['thirdInput']}
            onChange={onChange('thirdInput')}
          />
          <SingleInput
            placeholder={'Fourth code'}
            value={values['fourthInput']}
            onChange={onChange('fourthInput')}
          />
        </div>
        <Button type='submit' mod='success'>Submit</Button>
      </form>
    );
  }
}
