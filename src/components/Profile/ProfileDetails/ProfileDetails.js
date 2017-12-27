import React from 'react';
import style from './style.scss';

const ProfileDetails = () => {
  return (
    <div className={style.wrapper}>
      <dl className={style.header}>
        <dt className={style.title}>
            Your details
        </dt>
      </dl>
    </div>
  );
};

export default ProfileDetails;
