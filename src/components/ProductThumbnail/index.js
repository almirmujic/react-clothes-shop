import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.scss';

export default function ProductThumbnail({ product }) {
  const history = useHistory();

  const goToProductPage = () => {
    const displayParameter = product.id;
    history.push(`/product/${displayParameter}`);
  };

  return (
    <div onClick={goToProductPage} className="productWrap">
      <img className="item-img" alt={product.name} src={product.imgs[0]}></img>
      <div className="item-details">
        <span className="item-name">{product.name.toUpperCase()}</span>
        <span className="item-description">{product.description}</span>
      </div>
      <span className="item-price">
        ${product.price.toLocaleString('en-US')}
      </span>
    </div>
  );
}
