import React from 'react';

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
        onClick={() => {
          uncheckSignature(id);
        }}
      >
        Uncheck
      </button>
    ) : (
      <button
        onClick={() => {
          checkSignature(id);
        }}
      >
        Check
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
              <span className={styles.infoDataTitle}>Sent by admin:</span>
              <span>{isSend ? 'YES' : 'NO'}</span>
            </div>
            <div>
              <span className={styles.infoDataTitle}>Installed by user:</span>
              <span>{isInstalled ? 'YES' : 'NO'}</span>
            </div>
            <div>
              <span className={styles.infoDataTitle}>Last edited:</span>
              <span>{lastEdit}</span>
            </div>
          </div>
          <div className={styles.infoMenu}>
            <button>Use</button>
            <div>
              <button>edit</button>
              <button>view</button>
              <button
                onClick={() => {
                  deleteSignature(id);
                }}
              >
                delete
              </button>
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
