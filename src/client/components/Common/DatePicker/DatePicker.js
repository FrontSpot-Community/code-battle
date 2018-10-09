import React from 'react';

import style from './style.scss';
import calendar from 'root/assets/images/calendar.svg';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const prepareDate = (value) => {
  const date = value ? new Date(value) : '';
  let textDate = 'Set Date';

  if (date) {
    const dd = date.getDate();
    const month = monthNames[date.getMonth()];
    const yyyy = date.getFullYear();
    textDate = dd + ` ${month} ` + yyyy;
  }

  const inputDate = date ? `${date.toISOString()}`.split('T')[0] : '';

  return {textDate, inputDate};
};

export const DatePicker = (props) => {
  const {value, label, className = '', ...rest} = props;
  const {textDate, inputDate} = prepareDate(value);

  return (
    <label className={`${style.label} ${className}`}>
      <span>{label}</span>
      <span className={style.input}>
        {textDate}
        <input
          type='date'
          value={inputDate}
          { ...rest }
        />
        <img className={style.calendar} src={calendar}/>
      </span>
    </label>
  );
};

export default DatePicker;
