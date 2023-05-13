import { useEffect, useState } from "react";
import { useStore } from "../../../store";
import { useLocation } from "react-router-dom";
import cache from "../../../util/cache";
import { getItem } from "../../../util/get-item";

export const usePDP = () => {
  const location = useLocation();
  const productId = Number(location.pathname.replace('/product/', ''));
  const [product, setProduct] = useState(() => {
    const cachedProduct = cache.getItem(`product-${productId}`);
    if (cachedProduct) return cachedProduct;
    if (location.state?.product) return location.state.product;
    return undefined;
  });
  const [related, setRelated] = useState([]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { cart, setCart, toggleIsCartVisible } = useStore();

  useEffect(() => {
    getItem(productId).then(setProduct);

    fetch(`http://localhost:3000/related`).then(res => res.json()).then((res) => {
      setRelated(res.related)
    });
  }, [productId])

  const fetchItem = (product) => {
    return fetch('http://localhost:3000/addToCart', {
      method: 'post', headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify({ productId: product.id })
    });
  }

  const peekCart = () => {
    toggleIsCartVisible();
    setTimeout(() => {
      toggleIsCartVisible();
    }, 1000)
  }

  const handleAddToCartSlow = () => {
    setIsAddingToCart(true);
    fetchItem(product).then(res => res.json()).then((res) => {
      const cart = res.cart;
      setCart(cart);
      setIsAddingToCart(false);
      peekCart();
    })
  }

  const handleAddToCartFast = () => {
    fetchItem(product).then(res => res.json()).then((res) => {
      const cart = res.cart;
      setCart(cart);
    })

    if (!cart.find((cartProduct) => cartProduct.id === product.id)) {
      setCart([...cart, product]);
    }
    peekCart();
  }

  return {
    product,
    handleAddToCart: handleAddToCartSlow, // NOT optimistically updating the UI
    // handleAddToCart: handleAddToCartFast, // For demonstrating optimistically updating the UI
    isAddingToCart,
    related
  }
}

