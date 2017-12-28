import React from 'react';

import SingleTooltip from './SingleTooltip';
import style from './style.scss';
import authorImg from './assets/author.svg';
import difficultyImg from './assets/difficulty.svg';
import satisfactionImg from './assets/satisfaction.svg';
import solvedByImg from './assets/solvedBy.svg';
import statusOpenImg from './assets/status_open.svg';
import statusResolvedImg from './assets/status_resolved.svg';

const TooltipsBoard = (props) => {
  const {difficulty, author, satisfaction, solvedBy, status} = props.task;

  const tooltipsData = [
    {img: difficultyImg, text: difficulty},
    {img: satisfactionImg, text: satisfaction},
    {img: solvedByImg, text: solvedBy},
    {img: authorImg, text: author},
    {img: [statusOpenImg, statusResolvedImg], text: status, status: true}
  ];

  const externalClasses = props.className ? props.className : '';
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
