import React, {Fragment} from 'react';
import HeaderWithSearch from './components/HeaderWithSearch';
import JoinedUsers from './components/JoinedUsers';

export default class JoinedUsersSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <HeaderWithSearch />
        <JoinedUsers users={this.props.users}/>
      </Fragment>
    );
  }
}
