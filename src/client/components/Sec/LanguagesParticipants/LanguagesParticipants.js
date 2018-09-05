import React, {Component} from 'react';
import style from './style.scss';

import ParticipantsChart from './ParticipantsChart';

export default class LanguagesParticipants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>
            Languages Participants
          </dt>
        </dl>
        <ParticipantsChart metrics={this.props.metrics}/>
      </div>
    );
  }
}
