import React, {Component} from 'react';
import ListItem from './ListItem';
import style from './style.scss';
import {Button} from 'src/components/Common';

export default class ProfileDetailsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={this.props.onSubmitProfileDetails}
        onReset={this.props.onResetProfileDetails}
        className={style.profileDetailsList}
      >
        {Object
          .entries(this.props.profileDetails)
          .map(([title, value]) => (
            <ListItem
              key={title}
              editable={title !== 'githubLogin'}
              title={title}
              value={value}
              onChangeProfileDetail={this.props.onChangeProfileDetail}
            />
          ))
        }
        {this.props.isProfileDetailsChanged
          ? <div className={style.buttonsBlock}>
            <Button type='reset' mod='cancel'>Reset</Button>
            <Button type='submit' mod='success'>Save changes</Button>
          </div>
          : null}
      </form>
    );
  }
}
