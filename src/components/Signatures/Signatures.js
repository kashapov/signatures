import React from 'react';

import styles from './Signatures.module.css';

const Signatures = props => {
  const {
    signatures,
    checkSignature,
    uncheckSignature,
    deleteSignature,
  } = props;

  const getSignatureItem = ({ id, img, isChecked }) => {
    return (
      <div key={id} className={styles.item}>
        <div className={styles.signature}>
          <img className={styles.image} src={img} alt="" />
        </div>
        <div className={styles.info}>
          {isChecked ? (
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
          )}
          <button
            onClick={() => {
              deleteSignature(id);
            }}
          >
            delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.wrapper}>
      {signatures.map(signature => getSignatureItem(signature))}
    </section>
  );
};

export default Signatures;
