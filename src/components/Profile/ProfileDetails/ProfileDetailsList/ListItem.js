import React from 'react';
import style from './style.scss';

const texts = {
  githubLogin: 'GitHub',
  firstName: 'First name',
  lastName: 'Last name',
  email: 'E-mail',
  phoneNumber: 'Phone number',
  country: 'Country'
};

const ListItem = (props) => {
  const {title, value, editable, onChangeProfileDetail} = props;
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
              onChangeProfileDetail(title, target.value);
            }}
          />
          : <div className={style.profileDetailValue}>{value}</div>}
      </div>
    </div>
  );
};

export default ListItem;
