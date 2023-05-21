import ProductCard from "../../../base/components/ProductCard";
import LoadingIndicator from "../../../base/components/LoadingIndicator";
import { usePDP } from "./talons/usePDP";
import classes from "./PDP.module.css";

const PDP = () => {
  const { product, handleAddToCart, isAddingToCart, related } = usePDP();

  if (!product) {
    return (
      <div className={classes.loadingContainer}>
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          {/* Uncomment the following, and comment out the block after the blank line, to demonstrate re-using browser cache */}
          <img
            className={classes.previewImage}
            src={product.previewImage}
            width="600"
          />
          <img className={classes.image} src={product.image} width="600" />

          {/*Comment out the following, and uncomment the above, to demonstrate re-using browser cache*/}
          {/* <img src={product.image} width="600"/> */}
        </div>
        <div>
          <div>
            <h1>{product.name}</h1>
          </div>
          <div>{product.shortDesc}</div>
          <div className={classes.price}>${product.price}</div>
          <div className={classes.addToCartContainer}>
            <button
              onClick={handleAddToCart}
              className={classes.addToCartBtn}
              disabled={isAddingToCart}
            >
              {isAddingToCart ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </div>

        <div className={classes.tab}>
          <input
            onChange={() => {}}
            checked="checked"
            id="tab1"
            type="radio"
            name="pct"
            className={classes.input1}
          />
          <input
            onChange={() => {}}
            id="tab2"
            type="radio"
            name="pct"
            className={classes.input2}
          />
          <input
            onChange={() => {}}
            id="tab3"
            type="radio"
            name="pct"
            className={classes.input3}
          />
          <nav>
            <ul>
              <li className={classes.tab1}>
                <label htmlFor="tab1">Description</label>
              </li>
              <li className={classes.tab2}>
                <label htmlFor="tab2">Additional Information</label>
              </li>
              <li className={classes.tab3}>
                <label htmlFor="tab3">Reviews</label>
              </li>
            </ul>
          </nav>
          <section>
            <div className={classes.tab1}>
              <h2>Description</h2>
              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </div>
            <div className={classes.tab2}>
              <h2>Additional Information</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum nesciunt ipsum dolore error repellendus officiis aliquid
                a, vitae reprehenderit, accusantium vero, ad. Obcaecati numquam
                sapiente cupiditate. Praesentium eaque, quae error!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, maiores.
              </p>
            </div>
            <div className={classes.tab3}>
              <h2>Reviews</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
                nobis culpa rem, vitae earum aliquid.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className={classes.specificationsContainer}>
        <div className={classes.specifications}>
          <div>SKU: {product.sku}</div>
          <div>Category: Wall Clocks</div>
        </div>
      </div>

      <div className={classes.relatedProductsContainer}>
        <div className={classes.relatedProductsTitle}>Related Products</div>
        {related.length > 0 && (
          <div className={classes.relatedProducts}>
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PDP;
