import { createContext, useState, useEffect } from 'react';

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const savedBag = JSON.parse(localStorage.getItem('savedBag'));
  const [bag, setBag] = useState(savedBag || []);
  const [addToBagDisabled, setAddToBagDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [size, setSize] = useState('');

  useEffect(() => {
    const subValue = bag.reduce((total, item) => total + item.price, 0);
    const finalSubtotal = subValue.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    setSubTotal(finalSubtotal);
  }, [bag]);

  //save bag to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('savedBag', JSON.stringify(bag));
  }, [bag]);

  return (
    <BagContext.Provider
      value={{
        bag,
        setBag,
        subTotal,
        open,
        setOpen,
        size,
        setSize,
        addToBagDisabled,
        setAddToBagDisabled,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};
