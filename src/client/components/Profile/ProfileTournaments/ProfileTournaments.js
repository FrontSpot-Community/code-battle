import React from 'react';
import style from './style.scss';

import HeadRow from './HeadRow';
import BodyRow from './BodyRow';

const headerCells = ['Tournament', 'All tasks', 'Solved tasks'];

const ProfileTournaments = (props) => {
  return (
    <div className={style.wrapper}>
      <dl className={style.header}>
        <dt className={style.title}>
          Your activity
        </dt>
      </dl>
      <HeadRow
        headerCells={headerCells}
      />
      <section className={style.body}>
        {
          props.tournaments.map((item, idx) => (
            <BodyRow
              key={idx}
              tournament={item}
            />
          ))
        }
      </section>
    </div>
  );
};

export default ProfileTournaments;
