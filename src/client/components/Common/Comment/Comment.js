import React from 'react';

import style from './style.scss';
import TimeAgo from 'react-timeago';

const Comment = (props) => {
  const {name, avatar, date, text} = props.comment;
  const image = require(`${process.cwd()}/assets/images/${avatar}`);
  return (
    <section className={style.wrapper}>

      <div className={style.avatar}>
        <img src={image} width='36px' height='36px' />
      </div>

      <div className={style.textBlock}>
        <header className={style.textHeader}>
          <span className={style.name}>{name}</span>
          <TimeAgo date={date} className={style.date} />
        </header>

        <p className={style.text}>{text}</p>
      </div>

    </section>
  );
};

export default Comment;
