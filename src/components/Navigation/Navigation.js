import React, {Component} from 'react';
import logoImage from '../../assets/logo.svg';
import {Link, withRouter} from 'react-router-dom';

import styles from './style.scss';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.brandTitle = 'Code Battle';
    }
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.brand_logo}>
                    <img src={logoImage}/>
                </div>
                <div className={styles.brand_title}>
                    <Link to={'/'}
                          className={styles.title}>
                        {this.brandTitle}
                    </Link>
                </div>
                <div className={styles.space}></div>
            </div>
        );
    }
}

export default withRouter(Navigation);
