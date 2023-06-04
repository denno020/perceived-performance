/**
 * This request is going to be used to allow me to delay things within the app by using
 * the Network throttling in DevTools
 * It's going to allow that, because the "fake API requests" aren't going to actually trigger
 * until after this faux request has resolved
 */
export const handler = async () => {
  await new Promise((r) => setTimeout(r, 1000));

  return {
    statusCode: 200
  };
};
