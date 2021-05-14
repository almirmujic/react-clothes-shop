import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ProductsContext } from 'context/ProductsContext';
import { BagContext } from 'context/BagContext';

import AddToBag from 'components/AddToBag';
import SizeButtons from 'components/SizeButtons';
import LoadingSpinner from 'components/LoadingSpinner';

import './Product.scss';
import SizeDropdown from 'components/SizeDropdown';

export default function Product() {
  const { selectedProduct, setSelectedProduct } = useContext(ProductsContext);
  const { setBag, addToBagDisabled, size, setSize, setAddToBagDisabled } =
    useContext(BagContext);
  const { id } = useParams();

  const [imgID, setImgID] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getItem = async () => {
      try {
        const resp = await fetch(
          `https://react-clothes-db.herokuapp.com/products?id=${id}`
        );
        const data = await resp.json();
        setSelectedProduct(data[0]);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getItem();
  }, [id, setSelectedProduct, setLoading]);

  useEffect(() => {
    setAddToBagDisabled(true);
    setSize('');
  }, [setAddToBagDisabled, setSize]);

  const addBag = () => {
    const item = { ...selectedProduct, cartID: uuidv4(), size: size };
    setBag((prevState) => [...prevState, item]);
  };

  const handleImg = (id) => {
    setImgID(id);
  };

  if (loading) {
    return (
      <div style={{ margin: '3rem auto', width: '100px' }}>
        <LoadingSpinner />
      </div>
    );
  }

  if (!loading || selectedProduct.imgs.length < 1)
    return (
      <main className="productPage-container">
        <div className="productPage-imgsWrap">
          <img
            className="productPage-mainImg"
            alt={selectedProduct.name}
            src={selectedProduct.imgs[imgID]}
          />
          <div className="productPage-gallery">
            {selectedProduct.imgs.map((img, idx) => (
              <img
                className="productPage-galleryImg"
                alt={selectedProduct.name}
                key={idx}
                src={img}
                onClick={() => handleImg(idx)}
              />
            ))}
          </div>
        </div>
        <div className="productPage-detailsWrap">
          <span className="productPage-name">{selectedProduct.name}</span>
          <span className="productPage-description">
            {selectedProduct.description}
          </span>
          <span className="productPage-price">
            ${selectedProduct.price.toLocaleString('en-US')}
          </span>
          {selectedProduct.type === 'jeans' ||
          selectedProduct.type === 'shorts' ? (
            <SizeDropdown />
          ) : (
            <SizeButtons />
          )}
          <AddToBag
            btnDisabled={addToBagDisabled}
            text="Add to Bag"
            add={addBag}
          />
          <span className="productPage-note">{selectedProduct.editorNote}</span>
          <div className="productPage-details">
            <h4>Size Details</h4>
            <ul>
              {selectedProduct.sizeDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="productPage-details">
            <h4>Item Details</h4>
            <ul>
              {selectedProduct.itemDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    );
}
