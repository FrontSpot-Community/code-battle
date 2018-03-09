import React from 'react';
import style from './style.scss';

const texts = {
  githubLogin: 'GitHub',
  firstName: 'First name',
  lastName: 'Last name',
  email: 'E-mail',
  upsa: 'UPSA Id',
  phoneNumber: 'Phone number',
  country: 'Country'
};

const ListItem = (props) => {
  const {title, value, editable, onChangeProfileDetail, additionalInfo} = props;
  return (
    <div
      className={style.profileDetailsListItem}
    >
      <div className={style.profileDetail}>
        <div className={style.profileDetailName}>
          {texts[title]}
        </div>
        {editable
          ? <input
            type='text'
            className={style.profileDetailValue}
            value={value}
            onChange={({target}) => {
              !props.changeOnPaste && onChangeProfileDetail(title, target.value);
            }}
            onPaste={(e) => {
              props.changeOnPaste &&
                onChangeProfileDetail(title, e.clipboardData.getData('Text'));
            }}
          />
          : <div className={style.profileDetailValue}>{value}</div>}
      </div>
      {additionalInfo}
    </div>
  );
};

export default ListItem;
