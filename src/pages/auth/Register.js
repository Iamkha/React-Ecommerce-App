import React from 'react';
import styles from './auth.module.scss';
import RegisterImg from '../../assets/registerImg.png';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm password" required />
            <button className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>
          <span className={styles.register}>
            <p>Already an account?</p>
            <Link to={'/Login'}> Login</Link>
          </span>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={RegisterImg} alt="Login" width={'400'} />
      </div>
    </section>
  );
};

export default Register;
