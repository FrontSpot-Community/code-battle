import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

export default class TotalValue extends Component {
  render() {
    const {title, value} = this.props;
    let {color} = this.props;

    if (title === 'Participated' || title === 'Attempts') {
      color = '#999999';
    }

    return (
      <div className={style.total}>
        <div className={style.totalLabel} style={{color}}>{title}</div>
        <div className={style.totalValue}>{value || '--'}{title === 'Satisfaction' && '%'}</div>
      </div>
    );
  }
}

TotalValue.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number
};
