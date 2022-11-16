import React from 'react';
import styles from './Loader.module.scss';
import Loader from '../../assets/loader.png';
import ReactDOM from 'react-dom';

const loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img className={styles.loading} src={Loader} alt="Loading..." />
      </div>
    </div>,
    document.getElementById('loader')
  );
};

export default loader;
