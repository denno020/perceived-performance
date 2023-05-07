import { useEffect, useRef, useState } from "react";
import { getItems } from '../../util/get-items.js';
import ProductCard from "../ProductCard";
import classes from './PLP.module.css'

const PLP = () => {
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

  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          Wall Clocks
          <img className={classes.headerImage} src="/wall-clock-scene.jpg"/>
        </div>
      </div>
      <ul className={classes.products}>
        {items.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
            />
          </li>
        ))}
      </ul>
      {hasMore && (
        <button className="btn--load" type="button" onClick={() => loadItems()}>Load Next</button>
      )}
    </>
  );
};

export default PLP;
