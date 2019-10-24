import React from 'react';

import styles from './Header.module.css';

const Header = props => {
  const { checkedSignatures, deleteCheckedSignatures } = props;

  return (
    <header className={styles.header}>
      {checkedSignatures.length !== 0 ? (
        <div className={styles.filter}>
          Selected({checkedSignatures.length})
          <button onClick={() => deleteCheckedSignatures()}>
            Delete({checkedSignatures.length})
          </button>
        </div>
      ) : (
        <div className={styles.menu}>
          <h1 className={styles.menuH1}>Signature List</h1>
          <button className={styles.menuBtn}>Create a signature</button>
        </div>
      )}
    </header>
  );
};

export default Header;
