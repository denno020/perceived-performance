import cache from './cache';
export const getItems = ({ page }) => {
  return fetch(`http://localhost:3000/products/${page}`).then(res => res.json()).then((res) => {
    cache.addToCache({ key: `products-${page}`, value: JSON.stringify(res) })
    return res;
  });
}