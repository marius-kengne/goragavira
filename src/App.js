import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/"  />
          <Route path="/page1"  />
          <Route path="/page2" />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
