import React from "react";
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import { useStore } from '../../store';
import classes from './Header.module.css';

const Header = () => {
  const { toggleIsCartVisible, cart } = useStore();

  const handleOpenCart = (e) => {
    e.preventDefault();
    toggleIsCartVisible();
  }

  return (
    <header className={classes.header}>
      <div className={classes.innerHeader}>
        <div className={classes.brandContainer}>
          <div className={classes.logo}>
            🕰️
          </div>
          Timeless
        </div>
        <nav className={classes.nav}>
          <Link to="/6" className={classes.link}>
            <FaHome/>
            <span>Home</span>
          </Link>
        </nav>
        <div>
          <Link to="/" onClick={handleOpenCart} className={`${classes.link} ${classes.cartLink}`}>
            <FaShoppingCart/>
            <span>
              Cart
            </span>
            {cart.length > 0 && (
              <span className={classes.cartCount}>{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
