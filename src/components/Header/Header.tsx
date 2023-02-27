import React from 'react';
import styles from './Header.module.scss';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => (
  <div className={styles.header} data-testid="Header">
    <span className={styles.logo}>
      devfinder
    </span>
    <ThemeSwitcher />
  </div>
);

export default Header;
