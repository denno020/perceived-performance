import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext.jsx";
import { getItem } from "../../util/get-item";
import { useStore } from "../../../base/store";
import { useProductCard } from './talons/useProductCard';
import "./ProductCard.css";

const ProductCard = (props) => {
  const { sectionId, fetchFirst, useCache } = useAppContext();
  const { product, ref } = useProductCard(props);
  const { id, name, price, previewImage } = product;
  const navigate = useNavigate();
  const { cachedProducts } = useStore();

  const urlBase = sectionId === 0 ? `` : `/${sectionId}`;

  const handleClick = (e) => {
    e.preventDefault();

    const timeoutId = setTimeout(() => {
      if (!location.pathname.includes('product')) {
        navigate(`product/${id}`, { state: { product: false } });
      }
    }, 1000);

    getItem(id, { useCache }).then((product) => {
      if (!location.pathname.includes('product')) {
        clearTimeout(timeoutId);
        navigate(`${urlBase}/product/${id}`, { state: { product } })
      }
    });
  };

  const isCached = useMemo(
    () => useCache && cachedProducts.includes(id),
    [cachedProducts]
  );

  const LinkComponent = (props) => {
    if (fetchFirst) {
      return (
        <Link onClick={(e) => {!isCached && handleClick(e)}} to={`${urlBase}/product/${id}`}>
          {props.children}
        </Link>
      );
    }

    return <Link to={`${urlBase}/product/${id}`}>{props.children}</Link>;
  };

  return (
    <div ref={ref} className={`product-card${isCached ? " product-cached" : ""}`}>
      <div className="product-card__image-container">
        <LinkComponent>
          <img
            className="product-card__image"
            src={`${previewImage}?section=${sectionId}`}
            alt={name}
          />
        </LinkComponent>
      </div>
      <div className="product-card__name">
        <LinkComponent>{name}</LinkComponent>
      </div>
      <div className="product-card__price">${price}</div>
      {isCached && <div className="product-card-cached-icon">⚡</div>}
    </div>
  );
};

export default ProductCard;
