import React, { useState, useEffect, createContext } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [itemKeyword, setItemKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState({ imgs: [] });
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const apiUrl = itemKeyword
        ? `https://react-clothes-db.herokuapp.com/products?item=${itemKeyword}&_page=${page}&_limit=12`
        : `https://react-clothes-db.herokuapp.com/products?_page=${page}&_limit=12`;

      try {
        const resp = await fetch(apiUrl);
        const data = await resp.json();
        setProducts((prev) => [...prev, ...data]);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [itemKeyword, page]);

  useEffect(() => {
    setPage(1);
    setProducts([]);
  }, [itemKeyword]);

  return (
    <ProductsContext.Provider
      value={{
        setProducts,
        products,
        setItemKeyword,
        itemKeyword,
        loading,
        setLoading,
        selectedProduct,
        setSelectedProduct,
        setPage,
        page,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
