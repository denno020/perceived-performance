import { loadPage } from "../../server/products.js";

const delay = 300;

export const getItems = ({ page }) => {
  return fetch(`http://localhost:3000/products/${page}`).then(res => res.json()).then((res) => {
    return res;
  });
}