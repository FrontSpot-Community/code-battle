import React from 'react';
import Header from '../components/Header';
import {connect} from 'react-redux';

import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {location.pathname !== '/login' && <Header user={this.props.userInfo}/>}
        <main className={styles.main}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {userInfo: state.user.userInfo}
);

export default connect(mapStateToProps)(App);
