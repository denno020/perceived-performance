import { useEffect, useState } from "react";
import { useStore } from "../../../store";
import { useLocation } from "react-router-dom";

export const usePDP = () => {
  const [product, setProduct] = useState();
  const [related, setRelated] = useState([]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { setCart, toggleIsCartVisible } = useStore();
  const location = useLocation();

  useEffect(() => {
    const productId = Number(location.pathname.replace('/product/', ''));
    fetch(`http://localhost:3000/product/${productId}`).then(res => res.json()).then((res) => {
      setProduct(res.product)
    });

    fetch(`http://localhost:3000/related`).then(res => res.json()).then((res) => {
      setRelated(res.related)
    });
  }, [location.pathname])

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

