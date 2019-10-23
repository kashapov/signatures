import React from 'react';

import styles from './Header.module.css';

const Header = props => {
  return (
    <header className={styles.header}>
      <h1>Signature List</h1>
      <button>Create a signature</button>
    </header>
  );
};

export default Header;
