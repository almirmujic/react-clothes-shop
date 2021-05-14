import React from 'react';

import ProductList from 'components/ProductList/';
import Filter from 'components/Filter/';

export default function Store() {
  return (
    <main>
      <Filter />
      <ProductList />
    </main>
  );
}
