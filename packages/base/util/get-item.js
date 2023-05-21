import cache from "./cache.js";
import { useStore } from "../store";

export const getItem = (productId, opts) => {
  const { useCache } = opts;

  return fetch(`http://localhost:3000/product/${productId}`)
    .then((res) => res.json())
    .then((res) => {
      if (useCache) {
        cache.addToCache({
          key: `product-${productId}`,
          value: JSON.stringify(res.product),
        });
        useStore.setState((prevState) => {
          const cachedIds = new Set([...prevState.cachedProducts]);
          cachedIds.add(productId);

          return {
            ...prevState,
            cachedProducts: Array.from(cachedIds),
          };
        });
      }
      return res.product;
    });
};
