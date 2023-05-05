import { FaTimes } from 'react-icons/fa'
import classnames from 'classnames';
import { useStore } from '../store'
import classes from './Cart.module.css';

const Cart = () => {
  const { cart, isCartVisible, toggleIsCartVisible } = useStore();

  return (
    <div className={classnames(classes.cart, {[classes.visible]: isCartVisible})}>
      <button className={classes.closeButton} onClick={toggleIsCartVisible}>
        <FaTimes />
      </button>
      <header className={classes.title}>
        Cart
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
                {product.price}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.checkboutBtnContainer}>
        <button className={classes.checkoutBtn}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart;