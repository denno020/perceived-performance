import { useEffect, useRef, useState } from "react";
import { getItems } from "../../../util/get-items.js";

export const usePLP = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const pageToLoad = useRef(1);

  const loadItems = async () => {
    const data = await getItems({
      page: pageToLoad.current
    });
    pageToLoad.current = pageToLoad.current + 1;
    setHasMore(pageToLoad.current <= data.totalPages);
    setItems(prevItems => [...prevItems, ...data.items]);
  }

  useEffect(() => {
    loadItems();
  }, [])

  return {
    items, hasMore, loadItems
  }
}