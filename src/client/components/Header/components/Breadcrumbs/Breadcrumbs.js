import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import styles from './breadcrumbs.scss';
import {colors} from 'src/common/constants/colors';

class Breadcrumbs extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setHeaderBackgroundColor(nextProps);
    }
  }

  componentDidMount() {
    this.setHeaderBackgroundColor(this.props);
  }

  setHeaderBackgroundColor = (props) => {
    let paths = props.location.pathname.split('/').slice(1);
    paths = paths[0].length > 0 ? paths : paths.slice(1);
    paths.length === 3 && paths.pop();
    switch (paths.length) {
    case 0:
      this.props.setHeaderBackground(colors.bgDark);
      break;
    case 1:
      this.props.setHeaderBackground(colors.mediumBlack);
      break;
    case 2:
      this.props.setHeaderBackground(colors.lightBlack);
      break;
    default: break;
    }
  }

  generateLink = (prevPath, partIndex, paths) => {
    const path = ['', ...paths.slice(0, partIndex + 1)].join('/');

    return (
      <Link className={styles.crumb} key={path} to={path}>
        {prevPath.split('_').join(' ').toUpperCase()}
      </Link>
    );
  };

  render() {
    let paths = this.props.location.pathname.split('/');
    paths.length === 4 && paths.pop();
    const currentPath = paths[paths.length - 1];
    const restPaths = paths.slice(1, paths.length - 1);
    return (currentPath.length > 0 ? (
      <div className={styles.breadcrumbsWrapper}>
        {restPaths.map(this.generateLink).length > 0 &&
          restPaths.map(this.generateLink)
        }
        <div className={styles.crumb}>
          {currentPath.split('_').join(' ').toUpperCase()}
        </div>
      </div>
    ) : null);
  }
}

export default withRouter(Breadcrumbs);


