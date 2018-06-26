import * as React from 'react';
import weight from 'src/assets/images/weight.svg';
import like from 'src/assets/images/like.svg';
import check from 'src/assets/images/check.svg';
import person from 'src/assets/images/person.svg';
import suitcase from 'src/assets/images/suitcase.svg';

import style from './style.scss';

class StatusBar extends React.Component {
  render() {
    const {
      complexity,
      contentmentPercent,
      contentmentQuantity,
      resolvedSuccessfully,
      resolvedQuantity,
      authorName,
      taskStatus
    } = this.props;
    return (
      <div className={style.container}>
        <img className={style.icon} src={weight} alt="Complexity" />
        <span className={style.label}>{ complexity }</span>
        <img className={style.icon} src={like} alt="Contentment" />
        <span className={style.label}>
          {contentmentPercent}
          <span className={style.pretext}>of</span>
          {contentmentQuantity}
        </span>
        <img className={style.icon} src={check} alt="Resolved" />
        <span className={style.label}>
          {resolvedSuccessfully}
          <span className={style.pretext}>of</span>
          {resolvedQuantity}
        </span>
        <img className={style.icon} src={person} alt="Author" />
        <span className={style.label}>{ authorName }</span>
        <img className={style.icon} src={suitcase} alt="Status" />
        <span className={[style.label, style.status].join(' ')}>{ taskStatus }</span>
      </div>
    );
  }
}

export default StatusBar;
