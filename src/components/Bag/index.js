import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';

import BagItem from 'components/BagItem';

import { BagContext } from 'context/BagContext';

import './style.scss';

export default function Bag() {
  const { open, setOpen, bag, setBag, subTotal } = useContext(BagContext);

  const history = useHistory();

  const goToCheckout = (e) => {
    e.stopPropagation();
    history.push('/checkout');
    setOpen(false);
  };

  const goToItemPage = (id) => {
    history.push(`/product/${id}`);
    setOpen(false);
  };

  const removeItem = (itemID) => {
    const newBag = bag.filter((item) => item.cartID !== itemID);
    setBag(newBag);
  };

  const emptyBag = (e) => {
    e.stopPropagation();
    setBag([]);
  };

  return ReactDOM.createPortal(
    <>
      <div
        onClick={() => setOpen(false)}
        className={open ? `darkBG bgOpen` : `darkBG bgClose`}
      ></div>
      <div
        onClick={() => setOpen(false)}
        className={open ? 'bagOpen bag' : 'bagClose bag'}
      >
        <h1>finir</h1>
        <h3 className="bagTitle">
          {bag.length < 1 ? 'Empty bag' : 'Your shopping bag'}
        </h3>
        <div className="bagGrid">
          {bag.map((item) => (
            <BagItem
              key={item.cartID}
              name={item.name}
              price={item.price.toLocaleString('en-US')}
              img={item.imgs[0]}
              removeItem={removeItem}
              goToItem={goToItemPage}
              cartID={item.cartID}
              id={item.id}
              size={item.size}
            />
          ))}
        </div>
        {bag.length > 0 && (
          <>
            <div className="bagSubtotal-container">
              <span className="bagSubtotal-label">Subtotal:</span>
              <span className="bagSubtotal-price">${subTotal}</span>
            </div>
            <div className="checkout" onClick={goToCheckout}>
              Checkout
            </div>
            <div className="emptybag" onClick={emptyBag}>
              Empty bag
            </div>
          </>
        )}
      </div>
    </>,
    document.getElementById('bagPortal')
  );
}
