import { useEffect, useRef, useState } from "react";
import { getItems } from "../../../util/get-items";
import { getItem } from "../../../util/get-item";
import cache from "../../../util/cache";

export const usePLP = () => {
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
      setItems(prevItems => [...prevItems, ...productsCache.items]);
    }
    const data = await getItems({
      page: pageToLoad.current
    });
    pageToLoad.current = pageToLoad.current + 1;
    setHasMore(pageToLoad.current <= data.totalPages);
    if (initialRequest && items.length > 0) {
      setItems(data.items);
    } else {
      setItems(prevItems => [...prevItems, ...data.items]);
    }

    data.items.forEach((product) => {
      getItem(product.id);
    })
  }

  useEffect(() => {
    loadItems(true);
  }, [])

  return {
    items, hasMore, loadItems
  }
}