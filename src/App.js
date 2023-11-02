import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Produit from './Components/Produits/Produit';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* <Panier /> */}
        <Routes>
          <Route exact path="/accueil" Component={Home} />
          <Route path="/produits" Component={ListProduits} />
          <Route path="/page2" />
          <Route path="/login" Component={Login}/>
          <Route path="/product/:id" Component={Produit} />
          <Route />
        </Routes>
        {/* <Footer/> */}
        {/* <Testimonial/> */}
        <Footer />
        {/* <Footer /> */}

      </div>
    </Router>
  );
}

export default App;
