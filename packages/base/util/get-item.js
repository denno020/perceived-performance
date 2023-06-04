import cache from './cache.js';
import { useStore } from '../store';
import { loadItem } from './products.js';

export const getItem = (productId, opts) => {
  const { useCache, isPreFetching } = opts;

  if (useCache && isPreFetching && cache.getItem(`product-${productId}`)) {
    return Promise.resolve();
  }

  return fetch(`/.netlify/functions/getProduct?productId=${productId}`)
    .then((res) => res.json())
    .then((res) => {
      if (useCache) {
        cache.addToCache({
          key: `product-${productId}`,
          value: JSON.stringify(res.product)
        });
        useStore.setState((prevState) => {
          const cachedIds = new Set([...prevState.cachedProducts]);
          cachedIds.add(productId);

          return {
            ...prevState,
            cachedProducts: Array.from(cachedIds)
          };
        });
      }

      return res.product;
    });
};
