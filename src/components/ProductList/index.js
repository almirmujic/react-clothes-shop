import React, { useContext, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import ProductThumbnail from '../ProductThumbnail';
import './style.scss';

import { ProductsContext } from 'context/ProductsContext';

export default function ProductList() {
  const { products, setSelectedProduct, setPage } = useContext(ProductsContext);

  useEffect(() => {
    setSelectedProduct({});
  }, [setSelectedProduct]);

  return (
    <div>
      <InfiniteScroll
        dataLength={products.length}
        next={() => setPage((prevState) => prevState + 1)}
        hasMore={true}
        className="productsLayout"
      >
        {products.map((product) => (
          <ProductThumbnail key={product.id} product={product} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
