import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import { useAppContext } from '../../contexts/AppContext.jsx';
import { useStore } from '../../store';
import DemoSelect from './DemoSelect.jsx';
import classes from './Header.module.css';

const Header = () => {
  const { sectionId } = useAppContext();
  const { toggleCartVisibility, cart } = useStore();

  const handleOpenCart = (e) => {
    e.preventDefault();
    toggleCartVisibility('visible');
  };

  const homeLink = (() => {
    if (sectionId === 0) return '/';
    return `/${sectionId}/`;
  })();

  return (
    <header className={classes.header}>
      <div className={classes.innerHeader}>
        <div className={classes.brandContainer}>
          <div className={classes.logo}>🕰️</div>
          Timeless{' '}
          {
            <sup>
              (<DemoSelect />)
            </sup>
          }
        </div>
        <nav className={classes.nav}>
          <Link to={homeLink} className={classes.link}>
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to={homeLink} onClick={handleOpenCart} className={`${classes.link} ${classes.cartLink}`}>
            <FaShoppingCart />
            <span>Cart</span>
            {cart.length > 0 && <span className={classes.cartCount}>{cart.length}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
