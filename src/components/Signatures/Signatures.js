import React from 'react';

import {
  textSentByAdmin,
  textInstalledByUser,
  textLastEdited,
  btnUseText,
  textYes,
  textNo,
} from '../../constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faEye,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

import styles from './Signatures.module.css';

const Signatures = props => {
  const {
    signatures,
    checkSignature,
    uncheckSignature,
    deleteSignature,
    checkedSignatures,
  } = props;

  const getSignatureItem = (
    { id, img, link, title, isSend, isInstalled, lastEdit },
    checkedSignatures,
  ) => {
    const checkboxBtn = checkedSignatures.includes(id) ? (
      <button
        className={styles.checkboxBtn}
        onClick={() => {
          uncheckSignature(id);
        }}
      >
        <FontAwesomeIcon icon={faCheckSquare} />
      </button>
    ) : (
      <button
        className={styles.checkboxBtn}
        onClick={() => {
          checkSignature(id);
        }}
      >
        <FontAwesomeIcon icon={faSquare} />
      </button>
    );

    const infoBlock =
      checkedSignatures.length !== 0 ? (
        <div className={styles.infoChecked}>
          <div className={styles.infoCheckbox}>{checkboxBtn}</div>
        </div>
      ) : (
        <div className={styles.info}>
          <div className={styles.infoCheckbox}>{checkboxBtn}</div>
          <div className={styles.infoData}>
            <div>
              <span className={styles.infoDataTitle}>{textSentByAdmin}:</span>
              <span>{isSend ? textYes : textNo}</span>
            </div>
            <div>
              <span className={styles.infoDataTitle}>
                {textInstalledByUser}:
              </span>
              <span>{isInstalled ? textYes : textNo}</span>
            </div>
            <div>
              <span className={styles.infoDataTitle}>{textLastEdited}:</span>
              <span>{lastEdit}</span>
            </div>
          </div>
          <div className={styles.infoMenu}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoMenuBtn}
            >
              {btnUseText}
            </a>
            <div className={styles.infoMenuBtnsBlock}>
              <FontAwesomeIcon
                className={styles.infoMenuBtnIcon}
                icon={faPencilAlt}
              />
              <FontAwesomeIcon
                className={styles.infoMenuBtnIcon}
                icon={faEye}
              />
              <FontAwesomeIcon
                className={styles.infoMenuBtnIcon}
                onClick={() => {
                  deleteSignature(id);
                }}
                icon={faTrashAlt}
              />
            </div>
          </div>
        </div>
      );

    return (
      <div key={`signature_${id}`} className={styles.item}>
        <div className={styles.signature}>
          <img className={styles.image} src={img} alt={title} />
        </div>
        {infoBlock}
      </div>
    );
  };

  return (
    <section className={styles.wrapper}>
      {signatures.map(signature =>
        getSignatureItem(signature, checkedSignatures),
      )}
    </section>
  );
};

export default Signatures;
