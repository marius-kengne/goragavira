import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home/Home';
import Produits from './Components/Produits/Produits';
import Login from './Components/Login/Login';
import ListProduits from './Components/Produits/ListProduits';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/accueil" Component={Home} />
          <Route path="/produits" Component={Produits} />
          <Route path="/page2" />
          <Route path="/login" Component={Login}/>
          <Route path="/product/:id" Component={ListProduits} />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
