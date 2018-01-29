import React from 'react';

import style from './style.scss';
import {Comment} from 'src/components/Common';

const TaskPreviewDiscuss = (props) => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.headerText}>
          <span>Discuss</span>
          <span className={style.circle}>3</span>
        </div>
      </header>

      <section className={style.commentsBlock}>
        <div className={style.comments}>
          {props.task && props.task.comments.map((item, idx) => (
            <Comment key={idx} comment={item} />
          ))}
        </div>
        <textarea rows={4} className={style.commentArea} placeholder='Type your comment here...'>
        </textarea>
      </section>
    </div>
  );
};

export default TaskPreviewDiscuss;
