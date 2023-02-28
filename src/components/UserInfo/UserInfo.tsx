import React from 'react';
import styles from './UserInfo.module.scss';
import { LocalGithubUser } from '../../types';
import InfoItem, { InfoItemProps } from '../InfoItem/InfoItem';
import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg';
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as BlogIcon } from '../../assets/icon-website.svg';

type UserInfoProps = Pick<
LocalGithubUser,
'blog' | 'company' | 'location' | 'twitter'
>

const UserInfo = ({
  blog, company, location, twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];
  return (
    <div className={styles.userInfo} data-testid="UserInfo">
      {items.map((item) => {
        const { icon, text, isLink } = item;

        return (
          <InfoItem
            icon={icon}
            text={text}
            isLink={isLink}
            key={`${text}${isLink}`}
          />
        );
      })}
    </div>
  );
};

export default UserInfo;
