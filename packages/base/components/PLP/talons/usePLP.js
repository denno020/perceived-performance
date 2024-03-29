import { useEffect, useRef, useState } from "react";
import { getItems } from "../../../util/get-items";
import cache from "../../../util/cache";
import { getItem } from "../../../util/get-item.js";
import { useAppContext } from "../../../contexts/AppContext.jsx";

export const usePLP = (props) => {
  const { useCache, preFetch } = useAppContext();
  const pageToLoad = useRef(1);
  const [items, setItems] = useState(() => {
    const productsCache = cache.getItem(`products-${pageToLoad.current}`);
    if (!productsCache) return [];
    return productsCache.items;
  });
  const [hasMore, setHasMore] = useState(true);

  const loadItems = async (initialRequest = false) => {
    const productsCache = cache.getItem(`products-${pageToLoad.current}`);
    if (!initialRequest && productsCache !== null) {
      setItems((prevItems) => [...prevItems, ...productsCache.items]);
    }
    const data = await getItems(
      {
        page: pageToLoad.current,
      },
      { useCache }
    );
    pageToLoad.current = pageToLoad.current + 1;
    setHasMore(pageToLoad.current <= data.totalPages);
    if (initialRequest && items.length > 0) {
      setItems(data.items);
    } else {
      setItems((prevItems) => [...prevItems, ...data.items]);
    }
  };

  useEffect(() => {
    loadItems(true);
  }, []);

  return {
    ...props,
    items,
    hasMore,
    loadItems,
  };
};
