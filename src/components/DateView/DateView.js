import React from 'react';
import styles from './style.scss';

export default ({time, children}) => {
  if (!time) return null;

  let remaining = time;
  const days = Math.floor(remaining / 1000 / 60 / 60 / 24);
  remaining -= days * 1000 * 60 * 60 * 24;

  const hours = Math.floor(remaining / 1000 / 60 / 60);
  remaining -= hours * 1000 * 60 * 60;

  const minutes = Math.floor(remaining / 1000 / 60);
  remaining -=minutes * 1000 * 60;

  const inDays = days ? `${days}d ` : '';
  const inHours = hours ? `${hours}h ` : '';
  // Do not show minutes if days are shown
  const inMinutes = minutes && !days ? `${minutes}m` : '';

  return inDays || inHours || inMinutes
    ? (<div className={styles.date}>{inDays}{inHours}{inMinutes} {children}</div>)
    : null;
};
