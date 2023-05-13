import cache from "./cache.js";

export const getItem = (productId) => {
  return fetch(`http://localhost:3000/product/${productId}`).then(res => res.json()).then((res) => {
    cache.addToCache({ key: `product-${productId}`, value: JSON.stringify(res.product) })
    return res.product;
  });
}