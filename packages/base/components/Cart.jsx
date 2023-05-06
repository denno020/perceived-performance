import { FaTimes } from 'react-icons/fa'
import classnames from 'classnames';
import { useStore } from '../store'
import classes from './Cart.module.css';

const Cart = () => {
  const { cart, isCartVisible, toggleIsCartVisible, setCart } = useStore();

  const clearCart = () => {
    fetch('http://localhost:3000/clearCart', {
      method: 'DELETE'
    }).then(() => {
      setCart([]);
      toggleIsCartVisible();
    })
  }

  const currencyFormatter = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD'});
  const total = currencyFormatter.format(cart.reduce((acc, product) => acc + Number(product.price), 0));

  return (
    <div className={classnames(classes.cart, {[classes.visible]: isCartVisible})}>
      <button className={classes.closeButton} onClick={toggleIsCartVisible}>
        <FaTimes />
      </button>
      <header className={classes.header}>
        <div className={classes.title}>
          Cart
        </div>
        <div className={classes.total}>
          Total: {total}
        </div>
      </header>
      <ul>
        {cart.map(product => (
          <li className={classes.product}>
            <div>
              <img width={100} src={product.image} alt={product.name} />
            </div>
            <div className={classes.details}>
              <div>
                {product.name}
              </div>
              <div>
                {currencyFormatter.format(product.price)}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.checkboutBtnContainer}>
        <button className={classes.checkoutBtn}>Checkout</button>
        <button onClick={clearCart} className={classes.clearCartBtn}>Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart;