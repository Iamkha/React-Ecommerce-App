import React, { useState } from 'react';
import styles from './auth.module.scss';
import RegisterImg from '../../assets/registerImg.png';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config.js';
import Loader from '../../components/loader/Loader.js';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const Navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error('Password do not match.');
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success('Registration Successful...');
        Navigate('/Login');
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Confirm password"
                required
                value={cpassword}
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
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
    </>
  );
};

export default Register;
