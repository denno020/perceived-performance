import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getItem } from "../../util/get-item.js";
import './ProductCard.css'

const ProductCard = (props) => {
  const { id, name, price, previewImage } = props.product;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    getItem(id).then((product) => {
      navigate(`product/${id}`, { state: { product } })
    })

    // Really slow connections will be taken to the PDP before the network request is resolved
    setTimeout(() => {
      navigate(`product/${id}`, { state: { product: false } })
    }, 500)
  }

  const LinkComponent = (props) => {
    const fetchFirst = true; // Set this to true to simulate fetching the product first before routing

    if (fetchFirst) {
      return <Link onClick={handleClick} to={`product/${id}`}>{props.children}</Link>
    }

    return <Link to={`product/${id}`}>{props.children}</Link>
  }

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <LinkComponent>
          <img className="product-card__image" src={previewImage} alt={name} />
        </LinkComponent>
      </div>
      <div className="product-card__name">
        <LinkComponent>
          {name}
        </LinkComponent>
      </div>
      <div className="product-card__price">${price}</div>
    </div>
  );
};

export default ProductCard;
