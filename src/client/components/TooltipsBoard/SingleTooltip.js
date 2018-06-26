import React from 'react';

import style from './style.scss';

const SingleTooltip = (props) => {
  const {data} = props;

  const textStyle = !data.hasOwnProperty('status')
    ? style.commonText
    : data.text === 'Open' || data.text === 'In progress'
      ? style.openText
      : style.resolvedText;

  const checkOfInText = data.text && data.text.split(' of ');
  const text = checkOfInText && checkOfInText[1]
    ? <span className={textStyle}>
      {checkOfInText[0]}<span className={style.textStyleDark}> of </span>{checkOfInText[1]}
    </span>
    : <span className={textStyle}>{checkOfInText && checkOfInText[0]}</span>;
  return (
    <div className={style.singleWrapper}>
      <img src={data.img} className={style.image} width='16px' height='16px' />
      {text}
    </div>
  );
};

export default SingleTooltip;
