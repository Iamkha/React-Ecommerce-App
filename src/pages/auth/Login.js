import { useState } from 'react';
import styles from './auth.module.scss';
import LoginImg from '../../assets/LoginImg.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Card from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../firebase/config.js';
import Loader from '../../components/loader/Loader.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const Navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    console.log(email, password);
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success('Login Successful...');
        Navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success('Login Successfully...');
        Navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
        // toast.error('jhfbsdfb');
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={LoginImg} alt="Login" width={'400'} />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <form onSubmit={loginUser}>
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
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
              <div className={styles.links}>
                <Link to={'/Reset'}>Reset password</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogle}
            >
              <FaGoogle color="#fff" />
              <p></p>
              Login With Google
            </button>
            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to={'/Register'}>Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
