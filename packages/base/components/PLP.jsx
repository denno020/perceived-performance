import React from "react";
import ProductCard from "./ProductCard";
import { getItems } from '../util/get-items';
import { useInfiniteLoading } from '../hooks/useInfiniteLoading';
import classes from './PLP.module.css'

const PLP = () => {
  const { items, loadItems, hasMore } = useInfiniteLoading({ getItems });

  const placeholderProducts = React.useMemo(() => {
    return Array.from(new Array(12)).map((ingored, index) => (
      <li key={index}> {/* <------ */}
        <ProductCard isSkeleton={true}/>
      </li>
    ));
  }, [])

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default PLP;
