import React from 'react';

import styles from './Spinner.module.css';
import spinner from '../../assets/images/spinner.svg';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
