import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import {ProgressBar} from '../components/Common';

import style from './App.scss';

export class App extends React.Component {
    render() {
        const links = [
          {
            path: '/',
            title: 'Home'
          },
          {
            path: '/about',
            title: 'About'
          }
        ];

        return (
            <div className={style.wrapper}>
              <ProgressBar />
              <Navigation links={links} />
              {this.props.children}
            </div>
        );
    }
}
