import ProductCard from "../ProductCard";
import { usePLP } from './talons/usePLP';
import classes from './PLP.module.css'
import LoadingIndicator from "../LoadingIndicator/index.js";

const PLP = () => {
  const {items, hasMore, loadItems} = usePLP();

  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.header}>
          Wall Clocks
          <img className={classes.headerImage} src="/wall-clock-scene.jpg"/>
        </div>
      </div>
      <ul className={classes.products}>
        {items.length === 0 && (
          <li className={classes.loadingIndicatorContainer}>
            <LoadingIndicator />
          </li>
        )}
        {items.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
            />
          </li>
        ))}
      </ul>
      {items.length > 0 && hasMore && (
        <button className="btn--load" type="button" onClick={() => loadItems()}>Load Next</button>
      )}
    </>
  );
};

export default PLP;
