import ProductCard from "../ProductCard";
import classes from "./RelatedProducts.module.css";

const RelatedProducts = (props) => {
  const { related, useCache, fetchFirst } = props;

  if (!related || related.length === 0) return null;

  return (
    <div className={classes.relatedProductsContainer}>
      <div className={classes.relatedProductsTitle}>Related Products</div>
      {related.length > 0 && (
        <div className={classes.relatedProducts}>
          {related.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              fetchFirst={fetchFirst}
              useCache={useCache}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
