import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

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
    <Link to={'/cart'}>
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const tonggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            showMenu
              ? `${styles['show-nav']} ${styles['hide-nav']}`
              : `${styles['nav-wrapper']}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles['nav-wrapper']}`
                : `${styles['show-nav-wrapper']}`
            }
          >
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/Contract'}>Contract Us</Link>
              </li>
            </ul>
            <div className={styles['header-right']}>
              <span className={styles.links}>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
                <Link to={'/order-history'}>My Orders</Link>
              </span>
              {cart}
            </div>
          </div>
        </nav>
        <div className={styles['menu-icon']}>
          <Link to={'/cart'}>
            <p>cart</p>
          </Link>
          {cart}
          <HiOutlineMenuAlt3 size={20} onClick={tonggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
