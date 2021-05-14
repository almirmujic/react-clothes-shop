import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { BagContext } from 'context/BagContext';

import './Checkout.scss';
import CheckoutForm from 'components/CheckoutForm';

export default function Checkout() {
  const { subTotal, bag, setOpen } = useContext(BagContext);

  const history = useHistory();

  useEffect(() => {
    if (bag.length < 1) {
      history.push('/store');
      setOpen(false);
    }
  }, [bag, history, setOpen]);

  const goToAbout = () => {
    history.push('/about');
  };

  return (
    <main className="checkout-container">
      <h3 className="checkout-header">Checkout</h3>
      <div className="checkout-layout">
        <div className="checkout-totals">
          <div className="checkout-checkbag" onClick={() => setOpen(true)}>
            <h3>Check bag</h3>
          </div>
          <div className="checkout-totalWrap">
            <h3>Subtotal:</h3>
            <span>${subTotal}</span>
          </div>
          <div className="checkout-totalWrap">
            <h3>Shipping:</h3>
            <span>$0</span>
          </div>
          <div className="checkout-totalWrap">
            <h3>Total:</h3>
            <span>${subTotal}</span>
          </div>
          <span className="checkout-localTaxMsg">
            (local taxes calculated next step)
          </span>
        </div>
        <CheckoutForm goToAbout={goToAbout} />
      </div>
    </main>
  );
}
