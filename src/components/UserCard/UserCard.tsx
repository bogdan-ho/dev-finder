import React from 'react';
import styles from './UserCard.module.scss';
import UserStat from '../UserStat/UserStat';
import { LocalGithubUser } from '../../types';

type UserCardProps = LocalGithubUser;

const UserCard = ({ repos, followers, following }: UserCardProps) => (
  <div className={styles.userCard} data-testid="UserCard">
    <UserStat
      repos={repos}
      followers={followers}
      following={following}
    />
  </div>
);

export default UserCard;
