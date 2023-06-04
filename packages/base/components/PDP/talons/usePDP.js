import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../../contexts/AppContext.jsx';
import { useStore } from '../../../store';
import cache from '../../../util/cache';
import { getItem } from '../../../util/get-item.js';
import { getRelated } from '../../../util/get-related.js';
import { addToCart } from '../../../util/cart.js';

export const usePDP = () => {
  const { useCache, optimisticUi } = useAppContext();
  const location = useLocation();
  const productId = Number(location.pathname.split('/').at(-1));
  const [product, setProduct] = useState(() => {
    const cachedProduct = cache.getItem(`product-${productId}`);
    if (cachedProduct) return cachedProduct;
    if (location.state?.product) return location.state.product;
    return undefined;
  });
  const [related, setRelated] = useState([]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { cart, setCart, toggleCartVisibility, addToCachedProducts } = useStore();

  useEffect(() => {
    getItem(productId, { useCache }).then((product) => {
      setProduct(product);
      addToCachedProducts(product.id);
    });

    fetch(`/.netlify/functions/getRelated`)
      .then((res) => res.json())
      .then((related) => {
        setRelated(related);
      });
  }, [productId]);

  const fetchItem = (product) => {
    return addToCart(product.id);
  };

  const peekCart = () => {
    toggleCartVisibility('peeking');

    setTimeout(() => {
      toggleCartVisibility('hidden');
    }, 1000);
  };

  const handleAddToCartSlow = () => {
    setIsAddingToCart(true);
    fetchItem(product).then((res) => {
      const cart = res.cart;
      setCart(cart);
      setIsAddingToCart(false);
      peekCart();
    });
  };

  const handleAddToCartFast = () => {
    fetchItem(product).then((res) => {
      const cart = res.cart;
      setCart(cart);
    });

    if (!cart.find((cartProduct) => cartProduct.id === product.id)) {
      setCart([...cart, product]);
    }
    peekCart();
  };

  return {
    product,
    handleAddToCart: optimisticUi ? handleAddToCartFast : handleAddToCartSlow,
    isAddingToCart,
    related
  };
};
