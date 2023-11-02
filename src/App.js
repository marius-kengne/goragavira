import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter  } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home/Home';
import Produit from './Components/Produits/Produit';
import Login from './Components/Login/Login';
import ListProduits from './Components/Produits/ListProduits';

import { CartContext, CartProvider } from './Components/Panier/CartContext';
import CartView from './Components/Panier/CartView';
import ProductList from './Components/Panier/ProductList';
import MainProducts from './Components/Panier/MainProducts';

function App() {
  return (
    <Router>
      <CartProvider>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/accueil" Component={Home} />
          <Route path="/produits" Component={ListProduits} />
          <Route path="/page2" />
          <Route path="/login" Component={Login}/>
          <Route path="/product/:id" Component={Produit} />
          <Route />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </div>
      </CartProvider>
    </Router>
  );
}

export default App;
