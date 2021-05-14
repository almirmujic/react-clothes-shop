import Routes from './Routes';

import './GlobalStyles.scss';

import { ProductsProvider } from 'context/ProductsContext';
import { BagProvider } from 'context/BagContext';

import Navbar from 'components/Navbar';
import Bag from 'components/Bag';
import Footer from 'components/Footer';

function App() {
  return (
    <ProductsProvider>
      <BagProvider>
        <Navbar />
        <Bag />
        <Routes />
        <Footer />
      </BagProvider>
    </ProductsProvider>
  );
}

export default App;
