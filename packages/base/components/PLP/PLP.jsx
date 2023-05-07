import ProductCard from "../ProductCard";
import { usePLP } from './talons/usePLP';
import classes from './PLP.module.css'

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
