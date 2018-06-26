import React from 'react';

import style from './style.scss';
import TooltipsBoard from 'src/client/components/TooltipsBoard';

const TaskPreviewHeader = ({task}) => {
  const {name, ...others} = task;
  return (
    <div className={style.wrapper}>
      <h1>{name}</h1>
      <TooltipsBoard task={others}/>
    </div>
  );
};

export default TaskPreviewHeader;
