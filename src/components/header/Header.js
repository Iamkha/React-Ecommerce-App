import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from '../../redux/slice/authSlice';

const Active = ({ isActive }) => (isActive ? `${styles.active} ` : '');
const logo = (
  <div className={styles.logo}>
    <Link to={'/'}>
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);
const cart = (
  <span className={styles.cart}>
    <NavLink className={Active} to={'/cart'}>
      cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </NavLink>
  </span>
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState('');

  const dispatch = useDispatch();

  const Navigate = useNavigate();
  const tonggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logout successfully');
        Navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  //Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        // const uid = user.uid;
        // console.log(user.displayName);
        // setDisplayName(user.displayName);
        if (user.displayName === null) {
          const name = user.email.substring(0, user.email.indexOf('@'));
          const uName = name.charAt(0).toUpperCase() + name.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName('');
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`
          }
        >
          <div
            onClick={hideMenu}
            className={
              showMenu
                ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
                : `${styles['show-nav-wrapper']}`
            }
          ></div>
          <ul onClick={hideMenu}>
            <li className={styles['logo-mobile']}>
              {logo}
              <FaTimes size={22} color="red" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to={'/'} className={Active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={Active} to={'/Contract'}>
                Contract Us
              </NavLink>
            </li>
          </ul>
          <div className={styles['header-right']} onClick={hideMenu}>
            <span className={styles.links}>
              {displayName ? (
                ''
              ) : (
                <NavLink className={Active} to={'/login'}>
                  Login
                </NavLink>
              )}
              {displayName ? (
                <a href="#home">
                  <FaUserCircle size={16} />
                  <span>{displayName}</span>
                </a>
              ) : (
                ''
              )}
              {displayName ? (
                ''
              ) : (
                <NavLink className={Active} to={'/register'}>
                  Register
                </NavLink>
              )}
              {displayName ? (
                <NavLink className={Active} to={'/OrderHistory'}>
                  My Orders
                </NavLink>
              ) : (
                ''
              )}
              {displayName ? (
                <NavLink to={'/'} onClick={logoutUser}>
                  Logout
                </NavLink>
              ) : (
                ''
              )}
            </span>
            {displayName ? cart : ''}
          </div>
        </nav>
        <div className={styles['menu-icon']}>
          {displayName ? cart : ''}
          <HiOutlineMenuAlt3 size={20} onClick={tonggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
