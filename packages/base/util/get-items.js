import cache from "./cache";
import { loadPage, getPageCount } from './products';

export const getItems = ({ page }, opts) => {
  const { useCache } = opts;

  return new Promise((res) => {
    setTimeout(() => {
      const products = loadPage(page);
      const pageCount = getPageCount();

      const result = { items: products, totalPages: pageCount };

      if (useCache) {
        cache.addToCache({
          key: `products-${page}`,
          value: JSON.stringify(result),
        });
      }

      res(result)
    }, 500)
  })
};
