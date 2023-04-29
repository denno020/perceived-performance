import React from "react";
import ProductCard from "./ProductCard";
import { getItems } from '../util/get-items';
import { useInfiniteLoading } from '../hooks/01-useInfiniteLoading';
import classes from './PLP.module.css'

const PLP = () => {
  const { items, hasNext, hasPrevious, loadNext, loadPrevious, loadMoreRef } = useInfiniteLoading({ getItems, options: { loadingType: 'partial', preload: 'safe', partialInfiniteLimit: 3 } });

  const placeholderProducts = React.useMemo(() => {
    return Array.from(new Array(12)).map((ingored, index) => (
      <li key={index}> {/* <------ */}
        <ProductCard isSkeleton={true}/>
      </li>
    ));
  }, [])

  return (
    <React.Fragment>
      <div className={classes.header}>
        Wall Clocks
      </div>
      <ul className={classes.products}>
        {items.length === 0 ? placeholderProducts : items.map((product) => (
            <li key={product.id}>
              <ProductCard
                product={product}
              />
            </li>
          ))}
      </ul>
      {hasNext && (
        <button ref={loadMoreRef} className="btn--load" type="button" onClick={() => loadNext()}>Load Next</button>
      )}
    </React.Fragment>
  );
};

export default PLP;
