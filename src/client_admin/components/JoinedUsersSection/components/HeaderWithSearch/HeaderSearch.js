import React from 'react';
import style from './style.scss';

const HeaderWithSearch = () => {
  return (
    <div className={style.headerWithSearch}>
      <div className={style.title}>
        <span>JOINED USERS</span>
      </div>
      <div className={style.search}>
      </div>
    </div>
  );
};

export default HeaderWithSearch;
