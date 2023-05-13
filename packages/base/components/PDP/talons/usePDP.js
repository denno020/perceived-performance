import { useEffect, useState } from "react";
import { useStore } from "../../../store";
import { useLocation } from "react-router-dom";
import cache from "../../../util/cache";
import { getItem } from "../../../util/get-item";

export const usePDP = () => {
  const location = useLocation();
  const productId = Number(location.pathname.replace('/product/', ''));
  const [product, setProduct] = useState(() => cache.getItem(`product-${productId}`));
  const [related, setRelated] = useState([]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { setCart, toggleIsCartVisible } = useStore();

  useEffect(() => {
    getItem(productId).then(setProduct);

    fetch(`http://localhost:3000/related`).then(res => res.json()).then((res) => {
      setRelated(res.related)
    });
  }, [productId])

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    fetch('http://localhost:3000/addToCart', {
      method: 'post', headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify({ productId: product.id })
    }).then(res => res.json()).then((res) => {
      const cart = res.cart;
      setCart(cart);
      setIsAddingToCart(false);
      toggleIsCartVisible();
      setTimeout(() => {
        toggleIsCartVisible();
      }, 1000)
    })
  }

  return {
    product, handleAddToCart, isAddingToCart, related
  }
}

