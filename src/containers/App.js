import React from 'react';
import Navigation from '../components/Navigation/Navigation';

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
            <section className="wrapper">
              <Navigation links={links} />
              <main>
                {this.props.children}
              </main>
            </section>
        );
    }
}
