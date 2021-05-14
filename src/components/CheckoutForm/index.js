import React, { useState, useEffect, useRef } from 'react';

import './style.scss';

export default function CheckoutForm({ goToAbout }) {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [validForm, setValidForm] = useState(true);
  const [error, setError] = useState('');
  const [shopperInfo, setShopperInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
  });

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const allTrue = !Object.keys(shopperInfo).some((k) => !shopperInfo[k]);
    if (allTrue) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [shopperInfo]);

  const onChange = (e) => {
    const result = { ...shopperInfo, [e.target.name]: e.target.value };
    setShopperInfo(result);
  };

  const submitForm = (e) => {
    e.preventDefault();
    let pattern = new RegExp(
      /^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(shopperInfo.email)) {
      setValidForm(false);
      setError('Invalid email');
      return;
    }
    return goToAbout();
  };

  return (
    <form className="checkoutForm-wrap">
      <h2>Contact information</h2>
      <div className="checkoutForm-inputContainer">
        <label htmlFor="email">Email</label>
        <input
          ref={inputRef}
          name="email"
          type="email"
          placeholder="email"
          id="email"
          autoCapitalize="off"
          spellCheck="false"
          onChange={onChange}
        ></input>
      </div>
      {!validForm && <span style={{ color: 'red' }}>{error}</span>}
      <div className="checkoutForm-inputContainer">
        <label htmlFor="firstName">First name</label>
        <input
          name="firstName"
          type="text"
          placeholder="first name"
          id="firstName"
          autoCapitalize="off"
          spellCheck="false"
          onChange={onChange}
        ></input>
      </div>
      <div className="checkoutForm-inputContainer">
        <label htmlFor="lastName">Last name</label>
        <input
          name="lastName"
          type="text"
          placeholder="last name"
          id="lastName"
          autoCapitalize="off"
          spellCheck="false"
          onChange={onChange}
        ></input>
      </div>
      <div className="checkoutForm-inputContainer">
        <label htmlFor="address">Address</label>
        <input
          name="address"
          type="text"
          placeholder="address"
          id="address"
          autoCapitalize="off"
          spellCheck="false"
          onChange={onChange}
        ></input>
      </div>
      <div className="checkoutForm-inputContainer">
        <label htmlFor="city">City</label>
        <input
          name="city"
          type="text"
          placeholder="city"
          id="city"
          autoCapitalize="off"
          spellCheck="false"
          onChange={onChange}
        ></input>
      </div>
      <div className="checkoutForm-inputContainer">
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          type="phone"
          placeholder="phone"
          id="phone"
          autoCapitalize="off"
          spellCheck="false"
          onChange={onChange}
        ></input>
      </div>
      <button
        className="checkoutForm-paymentBtn"
        onClick={submitForm}
        disabled={btnDisabled}
      >
        Proceed to payment options
      </button>
    </form>
  );
}
