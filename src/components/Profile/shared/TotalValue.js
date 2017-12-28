import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

export default class TotalValue extends Component {
  render() {
    const {title, units, value} = this.props;

    return (
      <div className={style.total}>
        <div className={style.totalLabel}>{title}<br />{units}</div>
        <div className={style.totalValue}>{value || '--'}</div>
      </div>
    );
  }
}

TotalValue.propTypes = {
  title: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  value: PropTypes.number
};
