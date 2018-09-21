import React, {Component} from 'react';
import style from './style.scss';

import screenOne from 'root/assets/images/secScreencast1.png';
import screenTwo from 'root/assets/images/secScreencast2.png';
import screenThree from 'root/assets/images/secScreencast3.png';
import screenFour from 'root/assets/images/secScreencast4.png';
import screenFive from 'root/assets/images/secScreencast5.png';
import screenSix from 'root/assets/images/secScreencast6.png';

const comments = {
  'screenOne': '1) We present you our special SEC tournament. ↓',
  'screenTwo': '2) To get the full secret key, you must complete all tasks. ↓',
  'screenThree': `3) In order to start writing your solution, you need to click the "Check solution" button ↓`,
  'screenFour': `4) You can submit your solution by clicking on the "Submit" button. When your code passes all tests, the secret code will be displayed on the first line of the "Output" section. ↓`,
  'screenFive': `5) To complete tasks 2, 3 and 4, you must put the secret code from the previous task in the variable "secret" and current solution in the variable "answer" ↓`,
  'screenSix': `6) When you complete all tasks from the SEC tournament, you should put all the secret codes into inputs on the SEC page. ↓`
};

const Screen = ({image, comment}) => <div>
  <p className={style.comment}>{comment}</p>
  <img src={image} width={'90%'}></img>
</div>;

export default class Screencast extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <h2 className={style.header}>How to</h2>
        <Screen image={screenOne} comment={comments['screenOne']} />
        <Screen image={screenTwo} comment={comments['screenTwo']} />
        <Screen image={screenThree} comment={comments['screenThree']} />
        <Screen image={screenFour} comment={comments['screenFour']} />
        <Screen image={screenFive} comment={comments['screenFive']} />
        <Screen image={screenSix} comment={comments['screenSix']} />
      </div>
    );
  }
}
