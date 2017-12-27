import React from 'react';
import {ProgressBar} from '../components/Common';
import Header from '../components/Header';

import styles from './App.scss';

export class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {location.pathname !== '/login' ? <Header /> : null}
        <ProgressBar />
        <main className={styles.main}>
          {this.props.children}
        </main>
      </div>
    );
  }
}
