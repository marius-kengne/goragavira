import './App.css';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Produit from './Components/Produits/Produit';
import Login from './Components/Login/Login';
import ListProduits from './Components/Produits/ListProduits';

import { CartProvider } from './Components/Panier/CartContext';
import CartView from './Components/Panier/CartView';
import Footer from './Components/Layout/Footer/Footer';

import Register from './Components/Login/Register';
import Commande from './Components/Commande/Commande';


function App() {
  return (
    <Router>
      <CartProvider>
      <div>
        <Navigation />
        
        <Routes>          
          <Route path="/*" element={<Navigate to="/accueil" />} />
          <Route exact path="/accueil" Component={Home} />
          <Route path="/produits" Component={ListProduits} />
          <Route path="/page2" />
          <Route path="/login" Component={Login}/>
          <Route path="/register" Component={Register}/>
          <Route path="/product/:id" Component={Produit} />
          <Route />
          <Route path="/panier" element={<CartView />} />
          <Route path="/commande" element={<Commande />} />
        </Routes>
        <Footer />
      </div>
      </CartProvider>
    </Router>
  );
}

export default App;
