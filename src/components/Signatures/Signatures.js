import React from 'react';

import styles from './Signatures.module.css';

class Signatures extends React.PureComponent {
  getSignatureItem = ({ id, img, isChecked }) => {
    return (
      <div key={id} className={styles.item}>
        <div className={styles.signature}>
          <img className={styles.image} src={img} alt="" />
        </div>
        <div className={styles.info}>
          {isChecked ? (
            <button
              onClick={() => {
                this.props.setUnchecked(id);
              }}
            >
              Uncheck
            </button>
          ) : (
            <button
              onClick={() => {
                this.props.setChecked(id);
              }}
            >
              Check
            </button>
          )}
          <button onClick={() => {
                this.props.deleteSignature(id);
              }}>delete</button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <section className={styles.wrapper}>
        {this.props.signatures.map(signature =>
          this.getSignatureItem(signature),
        )}
      </section>
    );
  }
}

export default Signatures;
