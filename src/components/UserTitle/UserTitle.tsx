import React from 'react';
import { LocalGithubUser } from '../../types';
import styles from './UserTitle.module.scss';

type UserTitleProps = Pick<LocalGithubUser, 'name' | 'login' | 'created'>;

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const UserTitle = ({ created, login, name }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={styles.userTitle} data-testid="UserTitle">
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};

export default UserTitle;
