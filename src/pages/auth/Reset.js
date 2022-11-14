import React from 'react';
import styles from './auth.module.scss';
import forgot from '../../assets/forgot.png';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={forgot} alt="Login" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to={'/Login'}>- Login</Link>
              </p>
              <p>
                <Link to={'/Register'}>- Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
