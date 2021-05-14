import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function BagItem({
  name,
  price,
  img,
  removeItem,
  cartID,
  id,
  goToItem,
  size,
}) {
  return (
    <div
      className="bagItem-container"
      onClick={(e) => {
        e.stopPropagation();
        goToItem(id);
      }}
    >
      <img className="bagItem-img" alt={name} src={img} />
      <div className="bagItem-details">
        <div>
          <span className="bagItem-name">{name}</span>
        </div>
        <div>
          <span className="bagItem-size">({size})</span>
        </div>
        <div>
          <span className="bagItem-price">${price}</span>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          removeItem(cartID);
        }}
        className="bagItem-deleteItem"
      >
        -
      </div>
    </div>
  );
}

BagItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
  removeItem: PropTypes.func,
  cartID: PropTypes.string,
  id: PropTypes.number,
  goToItem: PropTypes.func,
  size: PropTypes.string,
};
