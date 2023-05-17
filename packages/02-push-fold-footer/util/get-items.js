import cache from './cache';
export const getItems = ({ page }) => {
  return fetch(`http://localhost:3000/products/${page}`).then(res => res.json()).then((res) => {
    // Un comment the following to demonstrate caching of category items
    // cache.addToCache({ key: `products-${page}`, value: JSON.stringify(res) })
    return res;
  });
}