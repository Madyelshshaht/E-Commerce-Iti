import { createRoot } from 'react-dom/client'
import './index.css'

import Router from './Routes/Router.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductProvider from './Context/ProductProvider.jsx';
import CartProvider from './Context/CartProvider.jsx';


createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <CartProvider>
      <Router />
    </CartProvider>
  </ProductProvider>
)
