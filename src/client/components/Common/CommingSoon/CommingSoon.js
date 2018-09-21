import React, {Component} from 'react';
import style from './style.scss';

import image from 'root/assets/images/comingsoon.png';

export default class CommingSoon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <img src={image} width='200px' />
      </div>
    );
  }
}
