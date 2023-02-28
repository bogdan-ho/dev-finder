import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string,
 }

const Button = ({ children }: ButtonProps) => (
  <button className={styles.button} data-testid="Button" type="submit">
    {children}
  </button>
);

export default Button;
