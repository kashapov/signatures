import React from 'react';
import PropTypes from 'prop-types';

import {
  filterSelectedText,
  filterDeleteText,
  appName,
  btnCreateSignatureText,
} from '../../constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.css';

const Header = props => {
  const { checkedSignatures, deleteCheckedSignatures } = props;

  return (
    <header className={styles.header}>
      {checkedSignatures.length !== 0 ? (
        <div className={styles.filter}>
          <div className={styles.filterItem}>
            <FontAwesomeIcon className={styles.filterBtnIcon} icon={faSquare} />
          </div>
          <div className={styles.filterItem}>
            {filterSelectedText} ({checkedSignatures.length}){` `}
            <FontAwesomeIcon className={styles.filterBtnIcon} icon={faTimes} />
          </div>
          <div className={styles.filterItem}>
            <button
              className={styles.filterBtn}
              onClick={() => deleteCheckedSignatures()}
            >
              <FontAwesomeIcon
                className={styles.filterBtnIcon}
                icon={faTrashAlt}
              />
              {` `}
              {filterDeleteText} ({checkedSignatures.length})
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.menu}>
          <h1 className={styles.menuH1}>{appName}</h1>
          <a
            href="https://newoldstamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.menuBtn}
          >
            {btnCreateSignatureText}
          </a>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  checkedSignatures: PropTypes.array,
  deleteCheckedSignatures: PropTypes.func.isRequired,
};

export default Header;
