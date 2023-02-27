import React, { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.scss';
import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icon-sun.svg';

const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? 'light' : 'dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div
      className={styles.themeSwitcher}
      data-testid="ThemeSwitcher"
      onClick={() => setDark(!isDark)}
      role="button"
      onKeyPress={() => setDark(!isDark)}
      tabIndex={-1}
    >
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

export default ThemeSwitcher;
