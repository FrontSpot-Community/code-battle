import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import {ProgressBar} from '../components/Common';

import './App.scss';

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
            <div className="wrapper">
              <ProgressBar />
              <Navigation links={links} />
              <main>
                {this.props.children}
              </main>
            </div>
        );
    }
}
