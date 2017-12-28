import React from 'react';

import style from './style.scss';

const SingleTooltip = (props) => {
  const {data} = props;

  const img = !data.status
    ? data.img
    : data.text === 'Open'
      ? data.img[0]
      : data.img[1];

  const textStyle = !data.status
    ? style.commonText
    : data.text === 'Open'
      ? style.openText
      : style.resolvedText;

  const checkOfInText = data.text.split(' of ');
  const text = checkOfInText[1]
    ? <span className={textStyle}>
      {checkOfInText[0]}<span className={style.textStyleDark}> of </span>{checkOfInText[1]}
    </span>
    : <span className={textStyle}>{checkOfInText[0]}</span>;
  return (
    <div className={style.singleWrapper}>
      <img src={img} className={style.image} width='16px' height='16px' />
      {text}
    </div>
  );
};

export default SingleTooltip;
