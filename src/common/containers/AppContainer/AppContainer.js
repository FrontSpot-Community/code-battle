import React from 'react';
import Header from 'common/components/Header/index';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import styles from './App.scss';
import {activePageChange} from 'common/actions/actionCreators/activePageActionCreator';
import {bindActionCreators} from 'redux';
import {CLEAR} from 'common/constants/activePageNames';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.removeListener = this.props.history.listen((targetLocation)=> {
      if (targetLocation.pathname !== this.props.location.pathname) {
        this.props.activePageChange(CLEAR);
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <Header user={this.props.userInfo}
          activePageName={this.props.activePage.activePageName}/>}
        <main className={styles.main}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
  activePage: state.activePage
});

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({activePageChange}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(App));
