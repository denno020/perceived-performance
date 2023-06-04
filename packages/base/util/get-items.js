import cache from './cache';
import { loadPage, getPageCount } from './products';

export const getItems = ({ page }, opts) => {
  const { useCache } = opts;

  return fetch(`/.netlify/functions/getProducts?page=${page}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((res) => {
      if (useCache) {
        cache.addToCache({
          key: `products-${page}`,
          value: JSON.stringify(res)
        });
      }

      return res;
    });
};
