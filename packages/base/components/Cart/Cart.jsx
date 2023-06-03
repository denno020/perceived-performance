import { FaTimes } from 'react-icons/fa';
import classnames from 'classnames';
import { useStore } from '../../store';
import { clearCart } from '../../util/cart';
import classes from './Cart.module.css';

const Cart = () => {
  const { cart, cartVisibility, toggleCartVisibility, setCart } = useStore();

  const emptyCart = () => {
    clearCart();
    setCart([]);
    toggleCartVisibility('hidden');
  };

  const currencyFormatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD'
  });
  const total = currencyFormatter.format(cart.reduce((acc, product) => acc + Number(product.price), 0));

  return (
    <div
      className={classnames(
        classes.cart,
        { [classes.visible]: ['visible', 'peeking'].includes(cartVisibility) },
        { [classes.peeking]: cartVisibility === 'peeking' }
      )}
    >
      <button className={classes.closeButton} onClick={() => toggleCartVisibility('hidden')}>
        <FaTimes />
      </button>
      <header className={classes.header}>
        <div className={classes.title}>Cart</div>
        <div className={classes.total}>Total: {total}</div>
      </header>
      <ul className={classes.items}>
        {cart.map((product) => (
          <li key={product.id} className={classes.product}>
            <div>
              <img width={100} src={product.previewImage} alt={product.name} />
            </div>
            <div className={classes.details}>
              <div>{product.name}</div>
              <div>{currencyFormatter.format(product.price)}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.checkboutBtnContainer}>
        <button className={classes.checkoutBtn}>Checkout</button>
        <button onClick={emptyCart} className={classes.clearCartBtn}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
