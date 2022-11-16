import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
              <NavLink className={Active} to={'/login'}>
                Login
              </NavLink>
              <NavLink className={Active} to={'/register'}>
                Register
              </NavLink>
              <NavLink className={Active} to={'/order-history'}>
                My Orders
              </NavLink>
              <NavLink
                className={Active}
                to={'/order-history'}
                onClick={logoutUser}
              >
                Logout
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>
        <div className={styles['menu-icon']}>
          {cart}
          <HiOutlineMenuAlt3 size={20} onClick={tonggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
