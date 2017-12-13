import React, {Component} from 'react';
import logoImage from '../../assets/logo.svg';
import styles from './style.scss';

export default class Navigation extends Component {
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
                    <a href="#" className={styles.title}>{this.brandTitle}</a>
                </div>
                <div className={styles.space}></div>
            </div>
        );
    }
}
