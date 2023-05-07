import React from "react";
import { Link } from "react-router-dom";
import './ProductCard.css'

const ProductCard = (props) => {
  const { product } = props;
  const { id, name = 'Placeholder name', price = '10.00', previewImage } = product || {};

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <Link to={`/product/${id}`}>
          <img className="product-card__image" src={previewImage} alt={name} />
        </Link>
      </div>
      <div className="product-card__name">
        <Link to={`/product/${id}`}>
          {name}
        </Link>
      </div>
      <div className="product-card__price">${price}</div>
    </div>
  );
};

export default ProductCard;
