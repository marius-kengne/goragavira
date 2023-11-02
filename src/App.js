import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home/Home';
import Produits from './Components/Produits/Produits';
import Login from './Components/Login/Login';
import Footer2 from './Components/Layout/Footer/Footer2';
import Testimonial from './Components/Layout/Footer/Testimonial/Testimonial';
import Panier from './Components/Panier/Panier';
import Footer from './Components/Layout/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* <Panier /> */}
        <Routes>
          <Route exact path="/accueil" Component={Home} />
          <Route path="/produits" Component={Produits} />
          <Route path="/page2" />
          <Route path="/login" Component={Login}/>
          <Route />
        </Routes>
        {/* <Footer/> */}
        {/* <Testimonial/> */}
        <Footer2 />
        {/* <Footer /> */}

      </div>
    </Router>
  );
}

export default App;
