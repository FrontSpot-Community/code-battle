import React from 'react';
import style from './style.scss';

const columnNames = [
  {
    name: 'Name',
    userPropperty: 'name'
  },
  {
    name: 'Solved',
    userPropperty: 'solved'
  },
  {
    name: 'Total Score',
    userPropperty: 'totalScore'
  },
  {
    name: 'Current Score',
    userPropperty: 'currentScore'
  }
];

const users = [
  {
    name: 'Vlad',
    solved: `5 ${<span>of</span>} 10`,
    totalScore: 10563,
    currentScore: 5000
  },
  {
    name: 'Pasha',
    solved: 8,
    totalScore: 18563,
    currentScore: 7050
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

const ListContent = () => {
  return (
    <div className={style.userslist}>
      {users.map((user) => (<ListItem user={user} key={user.name}/>))}
    </div>
  );
};

const ListItem = ({user}) => {
  return (
    <div className={style.listItem}>
      {columnNames.map((item) => (
        <div className={style.cell} key={user.name + item.name}>{user[item.userPropperty]}</div>
      ))}
    </div>
  );
};

const JoinedUsers = () => {
  return (
    <div className={style.joinedUsersList}>
      <ListHeader />
      <ListContent />
    </div>
  );
};

export default JoinedUsers;
