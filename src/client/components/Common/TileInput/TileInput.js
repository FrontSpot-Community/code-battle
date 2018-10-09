import React, {Component} from 'react';
import style from './style.scss';

import closeIcon from 'root/assets/images/close.svg';
import styles from 'src/common/components/Header/components/Notifications/notifications.scss';

export default class TileInput extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  sentOnChange = (newTileList) => {
    const {onChange} = this.props;
    onChange(newTileList);
  }

  handleInputValueChanges = (newText) => {
    this.setState({value: newText});
  };

  handleKeyPressChanges = (key) => {
    if (key === 'Enter') {
      const tileList = [...this.props.tiles];
      tileList.push(this.state.value);
      this.sentOnChange(tileList);
      this.setState({value: ''});
    }
  };

  handleListItemChanges = (tileName) => {
    const tileList = [...this.props.tiles];
    tileList.splice(tileList.indexOf(tileName), 1);
    this.sentOnChange(tileList);
  };

  render() {
    const {
      tiles, label, placeholder, className = ''
    } = this.props;
    const {value} = this.state;

    return (
      <label className={`${style.label} ${className}`}>
        <span>{label}</span>

        <div className={style.tileInputWrapper}>
          {
            tiles.map((tileName, index) =>
              <span
                key={index}
                className={style.tile}>
                {tileName}
                <img
                  onClick={() => this.handleListItemChanges(tileName)}
                  className={styles.close}
                  src={closeIcon} />
              </span>)
          }
          <input
            value={value}
            type='text'
            onChange={({target}) => this.handleInputValueChanges(target.value)}
            onKeyPress={({key}) => this.handleKeyPressChanges(key)}
            placeholder={placeholder}
            className={style.input}
          />
        </div>
      </label>);
  }
}
