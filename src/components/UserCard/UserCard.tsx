import React from 'react';
import styles from './UserCard.module.scss';
import UserStat from '../UserStat/UserStat';
import { LocalGithubUser } from '../../types';
import UserTitle from '../UserTitle/UserTitle';
import UserInfo from '../UserInfo/UserInfo';

type UserCardProps = LocalGithubUser;

const UserCard = ({
  repos, followers, following, created, login, name, avatar, bio, blog, company, location, twitter,
}: UserCardProps) => (
  <div className={styles.userCard} data-testid="UserCard">
    <img src={avatar} alt={login} className={styles.avatar} />
    <UserTitle
      created={created}
      login={login}
      name={name}
    />
    <p className={`${styles.bio}${bio ? '' : styles.empty}`}>
      {bio || 'This profile has no bio'}
    </p>
    <UserStat
      repos={repos}
      followers={followers}
      following={following}
    />
    <UserInfo
      blog={blog}
      company={company}
      location={location}
      twitter={twitter}
    />
  </div>
);

export default UserCard;
