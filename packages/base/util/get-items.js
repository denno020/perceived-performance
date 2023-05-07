export const getItems = ({ page }) => {
  return fetch(`http://localhost:3000/products/${page}`).then(res => res.json());
}