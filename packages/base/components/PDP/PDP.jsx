import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../../store'
import ProductCard from "../ProductCard";
import LoadingIndicator from "../LoadingIndicator";
import classes from './PDP.module.css';

const PDP = () => {
  const [product, setProduct] = useState();
  const [related, setRelated] = useState([]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { setCart, toggleIsCartVisible } = useStore();
  const location = useLocation();

  useEffect(() => {
    const productId = Number(location.pathname.replace('/product/', ''));
    fetch(`http://localhost:3000/product/${productId}`).then(res => res.json()).then((res) => {
      setProduct(res.product)
    });

    fetch(`http://localhost:3000/related`).then(res => res.json()).then((res) => {
      setRelated(res.related)
    });
  }, [location.pathname])

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    fetch('http://localhost:3000/addToCart', {
      method: 'post', headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify({ productId: product.id })
    }).then(res => res.json()).then((res) => {
      const cart = res.cart;
      setCart(cart);
      setIsAddingToCart(false);
      toggleIsCartVisible();
      setTimeout(() => {
        toggleIsCartVisible();
      }, 1000)
    })
  }

  if (!product) {
    return <div className={classes.loadingContainer}>
      <LoadingIndicator/>
    </div>;
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img src={product.image} width="600"/>
        </div>
        <div>
          <div><h1>{product.name}</h1></div>
          <div>
            {product.shortDesc}
          </div>
          <div className={classes.price}>
            ${product.price}
          </div>
          <div className={classes.addToCartContainer}>
            <button onClick={handleAddToCart} className={classes.addToCartBtn} disabled={isAddingToCart}>
              {isAddingToCart ? (
                'Adding...'
              ) : 'Add to Cart'}
            </button>
          </div>
        </div>

        <div className={classes.tab}>
          <input checked="checked" id="tab1" type="radio" name="pct" className={classes.input1}/>
          <input id="tab2" type="radio" name="pct" className={classes.input2}/>
          <input id="tab3" type="radio" name="pct" className={classes.input3}/>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nesciunt ipsum dolore error
                repellendus
                officiis aliquid a, vitae reprehenderit, accusantium vero, ad. Obcaecati numquam sapiente cupiditate.
                Praesentium eaque, quae error!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, maiores.</p>
            </div>
            <div className={classes.tab3}>
              <h2>Reviews</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, nobis culpa rem, vitae earum
                aliquid.</p>
            </div>
          </section>
        </div>

      </div>
      <div className={classes.specificationsContainer}>
        <div className={classes.specifications}>
          <div>
            SKU: {product.sku}
          </div>
          <div>
            Category: Wall Clocks
          </div>
        </div>
      </div>

      <div className={classes.relatedProductsContainer}>
        <div className={classes.relatedProductsTitle}>
          Related Products
        </div>
        {related.length > 0 && (
          <div className={classes.relatedProducts}>
            {related.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PDP;
