import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';
import TotalValue from './TotalValue';

export default class Totals extends Component {
  render() {
    const {metrics, colors} = this.props;

    return (
      <div className={style.totals}>
        {
          Object.entries(metrics).map(([key, value]) => {
            const color = colors[key];
            return (
              <div className={style.total} key={key}>
                <TotalValue title={key} value={value} color={color}/>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Totals.propTypes = {
  metrics: PropTypes.object.isRequired
};
