import React, {Component} from 'react';
import style from './style.scss';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };

    this.tabs = ['LET THE BATTLE BEGIN'];
  }
    onTabClickHandler = (clickedTabIndex) => {
      return () => {
        this.setState({activeTabIndex: clickedTabIndex});
      };
    };
    renderTabs = () => {
      const {activeTabIndex} = this.state;
      return this.tabs.map((tabName, index) => (
        <div className={style.tab_item} key={tabName}>
          <a onClick={this.onTabClickHandler(index)}>{tabName}</a>
          {activeTabIndex === index
                    && <div className={style.underline} />}
        </div>
      ));
    };

    render() {
      return (
        <div className={style.tabs}>
          {this.renderTabs()}
        </div>
      );
    }
}
