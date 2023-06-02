import cache from "./cache.js";
import { useStore } from "../store";
import { loadItem } from './products.js';

export const getItem = (productId, opts) => {
  const { useCache, isPreFetching } = opts;

  if (useCache && isPreFetching && cache.getItem(`product-${productId}`)) {
    return Promise.resolve(); 
  }

  return new Promise((res) => {
    setTimeout(() => {
      const product = loadItem(productId);

      if (useCache) {
        cache.addToCache({
          key: `product-${productId}`,
          value: JSON.stringify(product),
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

      
  
      res(product);

    }, 500);
  })
};
