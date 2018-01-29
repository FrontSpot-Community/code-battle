import React from 'react';

import SingleTooltip from './SingleTooltip';
import style from './style.scss';
// import authorImg from './assets/author.svg';
import difficultyImg from './assets/difficulty.svg';
// import satisfactionImg from './assets/satisfaction.svg';
// import solvedByImg from './assets/solvedBy.svg';
import statusOpenImg from './assets/status_open.svg';
import statusResolvedImg from './assets/status_resolved.svg';

const TooltipsBoard = ({className, task}) => {
  const {
    difficulty='Unknown',
    // author='Unknown',
    // satisfaction='Unknown',
    status='Open'
  } = task;

  const statusImage = status === 'Resolved' ? statusResolvedImg : statusOpenImg;

  const tooltipsData = [
    {img: difficultyImg, text: difficulty},
    // {img: satisfactionImg, text: satisfaction},
    // {img: solvedByImg, text: solvedBy},
    // {img: authorImg, text: author},
    {img: statusImage, text: status, status: status === 'Resolved'}
  ];

  const externalClasses = className ? className : '';
  const wrapperClasses = `${style.wrapper} ${externalClasses}`;

  return (
    <section className={wrapperClasses}>
      {
        tooltipsData.map((item, idx) => (
          <SingleTooltip key={idx} data={item} />
        ))
      }
    </section>
  );
};

export default TooltipsBoard;
