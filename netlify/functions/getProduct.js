import { loadItem } from '../../packages/base/util/products';

export const handler = async (event) => {
  const { productId } = event.queryStringParameters;
  const product = loadItem(productId);

  await new Promise((r) => setTimeout(r, 500));

  return {
    body: JSON.stringify({ product }),
    statusCode: 200
  };
};
