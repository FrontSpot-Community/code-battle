import React, {Component} from 'react';
import style from './style.scss';

export default class TournamentTableHead extends Component {
  renderHeaderCells = (headerCells) => {
    return headerCells.map((item) => (
      <div className={style.headerCell} key={item.propName}>
        {this.renderTableHeaderCell(item)}
      </div>
    ));
  };

  renderTableHeaderCell = (headerCell) => {
    if (headerCell.displayName) {
      return (
        <span>
          <span className={headerCell.disabled && style.disabled}>
            {headerCell.displayName}
          </span>
          {headerCell.sort &&
          <a className={style.sortIcon}>
            <i className={'glyphicon glyphicon-triangle-bottom'}/>
          </a>}
        </span>
      );
    } else {
      return headerCell.component;
    }
  };

  render() {
    const {headerCells} = this.props;

    return (
      <header className={style.header}>
        {this.renderHeaderCells(headerCells)}
      </header>
    );
  }
}
