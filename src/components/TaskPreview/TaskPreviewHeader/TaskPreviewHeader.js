import React from 'react';

import style from './style.scss';
import TooltipsBoard from 'src/components/TooltipsBoard';

const TaskPreviewHeader = (props) => {
  const {task} = props;

  return (
    <div className={style.wrapper}>
      <h1>{task.name}</h1>
      <TooltipsBoard task={task}/>
    </div>
  );
};

export default TaskPreviewHeader;
