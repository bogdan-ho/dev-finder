import React from 'react';
import styles from './Container.module.scss';

interface ContainerProps { }

const Container = ({ }: ContainerProps) => (
  <div className={styles.container} data-testid="Container">
    Container Component
  </div>
);

export default Container;
