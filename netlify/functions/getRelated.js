import { loadRelatedProducts } from '../../packages/base/util/products';

export const handler = async (event) => {
  await new Promise((r) => setTimeout(r, 500));
  const related = loadRelatedProducts();

  return {
    body: JSON.stringify(related),
    statusCode: 200
  };
};
