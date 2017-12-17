import React from 'react';
import {ProgressBar} from '../components/Common';
import Header from '../components/Header';
import './App.scss';

export class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <ProgressBar />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
