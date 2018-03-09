import React from 'react';
import ListItem from './ListItem';
import style from './style.scss';
import {Button, Switcher} from 'src/components/Common';

const ProfileDetailsList = (props) => {
  return (
    <form
      onSubmit={props.onSubmitProfileDetails}
      onReset={props.onResetProfileDetails}
      className={style.profileDetailsList}
    >
      {Object
        .entries(props.profileDetails)
        .map(([title, value]) => {
          return (title !== 'upsa' || props.epamEmployee === true) &&
          <div><ListItem
            key={title}
            editable={title !== 'githubLogin'}
            title={title}
            value={value}
            onChangeProfileDetail={props.onChangeProfileDetail}
            changeOnPaste={title === 'upsa'}
          />
          {title === 'upsa' &&
            <p className={style.upsa}>Please, paste ID from your upsa account</p>}
          </div>;
        })
      }
      <div className={style.epamEmployee}>
        Is EPAM employee? <Switcher
          className={style.switch}
          onChange={props.onChangeEpamEmployee}
          checked={props.epamEmployee}
        />
      </div>
      {props.isProfileDetailsChanged
        ? <div className={style.buttonsBlock}>
          <Button type='reset' mod='cancel'>Reset</Button>
          <Button type='submit' mod='success'>Save changes</Button>
        </div>
        : null}
    </form>
  );
};

export default ProfileDetailsList;
