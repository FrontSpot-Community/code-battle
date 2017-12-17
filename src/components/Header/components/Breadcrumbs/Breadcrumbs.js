import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import styles from './breadcrumbs.scss';

class Breadcrumbs extends Component {
  renderRoute = (props) => {
    let paths = props.location.pathname.split('/');
    const currentPath = paths[paths.length - 1];
    paths = paths.slice(1, paths.length - 1);

    return currentPath.length > 0 ? (
      <div className={styles.breadcrumbsWrapper}>
        {paths.map(this.generateLink).length > 0 &&
          paths.map(this.generateLink)
        }
        <div className={styles.crumb}>
          {currentPath.toUpperCase()}
        </div>
      </div>
    ) : null;
  };

  generateLink = (prevPath, partIndex, paths) => {
    const path = ['', ...paths.slice(0, partIndex + 1)].join('/');

    return (
      <Link className={styles.crumb} key={path} to={path}>
        {prevPath.toUpperCase()}
      </Link>
    );
  };

  render() {
    return (
      <Route path="*" render={this.renderRoute} />
    );
  }
}

export default Breadcrumbs;


