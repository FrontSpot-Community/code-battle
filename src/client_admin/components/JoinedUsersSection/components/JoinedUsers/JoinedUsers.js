import React from 'react';
import style from './style.scss';
import _ from 'lodash';

const columnNames = [
  {
    name: 'Name',
    userPropperty: 'githubUsername'
  },
  {
    name: 'Solved',
    userPropperty: 'solved'
  },
  {
    name: 'Total Score',
    userPropperty: 'statistics.totalScore'
  },
  {
    name: 'Current Score',
    userPropperty: 'currentScore'
  }
];

const ListHeader = () => {
  return (
    <div className={style.header}>
      {columnNames.map((item) => (
        <div className={style.columnName} key={item.name}>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

const ListContent = ({users}) => {
  return (
    <div className={style.userslist}>
      {users.map((user) => (<ListItem user={user} key={user._id}/>))}
    </div>
  );
};

const ListItem = ({user}) => {
  return (
    <div className={style.listItem}>
      {columnNames.map((item) => (
        <div className={style.cell}
          key={_.get(user, item.userPropperty) + item.name}>{_.get(user, item.userPropperty)}</div>
      ))}
    </div>
  );
};

const JoinedUsers = ({users}) => {
  return (
    <React.Fragment>
      <ListHeader />
      <ListContent users={users}/>
    </React.Fragment>
  );
};

export default JoinedUsers;
