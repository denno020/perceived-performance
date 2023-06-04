import { loadPage, getPageCount } from '../../packages/base/util/products';

export const handler = async (event) => {
  const { page } = event.queryStringParameters;
  const products = loadPage(page);
  const pageCount = getPageCount();

  const result = { items: products, totalPages: pageCount };
  await new Promise((r) => setTimeout(r, 500));

  return {
    body: JSON.stringify(result),
    statusCode: 200
  };
};
