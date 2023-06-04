import { loadItem } from './products';
const cart = new Set();

export const addToCart = (productId) => {
  return fetch(`/.netlify/functions/fauxAddToCart`).then(() => {
    cart.add(productId);

    return { cart: Array.from(cart).map((productId) => loadItem(Number(productId))) };
  });
};

export const clearCart = () => {
  return fetch(`/.netlify/functions/fauxAddToCart`).then(() => {
    cart.clear();

    return { cart: Array.from(cart) };
  });
};
