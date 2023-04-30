import React from "react";
import { Link } from "react-router-dom";
import './ProductCard.css'

const ProductCard = (props) => {
  const { product, onSelect = () => {}, restorationRef, isSkeleton } = props;
  const { id, name = 'Placeholder name', price = '10.00', image, pageNo } = product || {};

  React.useEffect(() => {
    // restorationRef is only provided to the ProductCard that needs to be scrolled to
    if (!restorationRef) {
      return;
    }

    // Restoring scroll here ensures the previously selected product will always be restored, no matter how long the API request
    // to get products takes
    restorationRef.current.scrollIntoView({ behavior: 'auto', block: 'center' });
  })

  return (
    <div className={`product-card ${isSkeleton ? 'product-card--skeleton' : ''}`} ref={restorationRef}>
      <div className="product-card__image-container">
        <Link to="/pdp" onClick={() => onSelect(id, pageNo)}>
          <img className="product-card__image" src={image} alt={name} />
        </Link>
      </div>
      <div className="product-card__name">
        <Link to="/pdp" onClick={() => onSelect(id, pageNo)}>
          {name}
        </Link>
      </div>
      <div className="product-card__price">${price}</div>
    </div>
  );
};

export default ProductCard;
