import React from 'react';
import Header from 'common/components/Header/index';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styles from './App.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <Header user={this.props.userInfo} />
        <main className={styles.main}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo
});

export default withRouter(connect(mapStateToProps, null)(App));
