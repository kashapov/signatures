import React from 'react';

import Header from '../Header';
import Signatures from '../Signatures';

import styles from './App.module.css';


const App = props => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Signatures />
    </div>
  );
};

export default App;
