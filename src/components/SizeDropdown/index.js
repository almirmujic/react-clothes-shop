import { useContext, useRef } from 'react';

import { BagContext } from 'context/BagContext';

import './style.scss';

export default function SizeDropdown() {
  const { setSize, size, setAddToBagDisabled } = useContext(BagContext);

  const selectSize = useRef(null);

  const configSize = (e) => {
    selectSize.current.disabled = true;
    setSize(e.target.value);
    setAddToBagDisabled(false);
  };

  return (
    <select
      className="selectBox"
      value={size}
      onChange={configSize}
      placeholder="Select Size"
    >
      <option ref={selectSize}>Select Size</option>
      <option value="28">US 28</option>
      <option value="29">US 29</option>
      <option value="30">US 30</option>
      <option value="31">US 31</option>
      <option value="32">US 32</option>
    </select>
  );
}
