import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Store from 'pages/Store';
import Product from 'pages/Product';
import Checkout from 'pages/Checkout';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/product/:id" component={Product} />
      <Route exact path="/checkout" component={Checkout} />
      <Redirect to="/" />
    </Switch>
  );
}
