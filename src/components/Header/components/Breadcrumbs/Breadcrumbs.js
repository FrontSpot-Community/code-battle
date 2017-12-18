import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import styles from './breadcrumbs.scss';

class Breadcrumbs extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  componentWillReceiveProps(nextProps) {
    let paths = nextProps.location.pathname.split('/').slice(1);
    paths = paths[0].length > 0 ? paths : paths.slice(1);
    if (this.props.location.pathname !== nextProps.location.pathname) {
      switch (paths.length) {
      case 0:
        this.props.setHeaderBackground('#222222');
        break;
      case 1:
        this.props.setHeaderBackground('#2b2b2b');
        break;
      case 2:
        this.props.setHeaderBackground('#383838');
        break;
      default: break;
      }
    }
  }

  generateLink = (prevPath, partIndex, paths) => {
    const path = ['', ...paths.slice(0, partIndex + 1)].join('/');

    return (
      <Link className={styles.crumb} key={path} to={path}>
        {prevPath.toUpperCase()}
      </Link>
    );
  };

  render() {
    let paths = this.props.location.pathname.split('/');
    const currentPath = paths[paths.length - 1];
    const restPaths = paths.slice(1, paths.length - 1);
    return (currentPath.length > 0 ? (
      <div className={styles.breadcrumbsWrapper}>
        {restPaths.map(this.generateLink).length > 0 &&
          restPaths.map(this.generateLink)
        }
        <div className={styles.crumb}>
          {currentPath.toUpperCase()}
        </div>
      </div>
    ) : null);
  }
}

export default withRouter(Breadcrumbs);


