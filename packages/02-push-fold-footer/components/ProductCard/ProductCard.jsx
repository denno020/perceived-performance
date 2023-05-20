import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { id, name, price, previewImage } = props.product;

  const LinkComponent = (props) => (
    <Link to={`product/${id}`}>{props.children}</Link>
  );

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <LinkComponent>
          <img className="product-card__image" src={previewImage} alt={name} />
        </LinkComponent>
      </div>
      <div className="product-card__name">
        <LinkComponent>{name}</LinkComponent>
      </div>
      <div className="product-card__price">${price}</div>
    </div>
  );
};

export default ProductCard;
