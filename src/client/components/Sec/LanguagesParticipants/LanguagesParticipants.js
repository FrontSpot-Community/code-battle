import React, {Component} from 'react';
import style from './style.scss';

import ParticipantsChart from './ParticipantsChart';
import BodyCol from './BodyCol';
import BodyMainCol from './BodyMainCol';

export default class LanguagesParticipants extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {metrics, colors} = this.props;
    const places = {};
    Object.entries(metrics).map(([key, value]) => {
      const name = {name: value};
      places[key] = name;
    });

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>
            Languages Participants
          </dt>
        </dl>
        <div className={style.content}>
          <div className={style.table}>
            <BodyMainCol key='languages' positions={places}/>
            <BodyCol key='metrics' positions={places}/>
          </div>
          <div className={style.chart}>
            <ParticipantsChart metrics={metrics} colors={colors}/>
          </div>
        </div>
      </div>
    );
  }
}
