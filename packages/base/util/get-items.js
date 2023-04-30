import { loadPage } from "../../server/products.js";

const delay = 300;

export const getItems = ({ page }) => {
  return fetch(`http://localhost:3000/products/${page}`).then(res => res.json()).then((res) => {
    console.log({res})
    return res;
  });
  return new Promise((res) => {
    setTimeout(() => {
      console.log(`API: getItems, page ${page}, loaded in ${delay}ms`);
      const products = loadPage(page);
      res({ items: products, totalPages: 10 });
    }, delay);
  })
}