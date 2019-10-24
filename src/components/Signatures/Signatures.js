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

  const getSignatureItem = ({ id, img }, checkedSignatures) => {
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
        <div className={styles.infoChecked}>{checkboxBtn}</div>
      ) : (
        <div className={styles.info}>
          {checkboxBtn}
          <button
            onClick={() => {
              deleteSignature(id);
            }}
          >
            delete
          </button>
        </div>
      );

    return (
      <div key={id} className={styles.item}>
        <div className={styles.signature}>
          <img className={styles.image} src={img} alt="" />
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
