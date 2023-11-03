import React from 'react';
import { Nav, NavMenu, NavLink, NavBtn, NavBtnLink, Bars } from './NavElements.js';
import CartView from '../Panier/CartView.js';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import logo from '../../Assets/logo.png';
import logo2 from '../../Assets/logo2.png';


import './Navigation.css';


const Navigation = () => {
  return (
    <>
    
          <div className='header'>
            <img className="logo"src={logo2}/>
          </div>

           <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/accueil" activestyle="true"> <span className='txt'>Accueil</span> <FaHome /></NavLink>
                    <NavLink to="/produits" activestyle="true"><span className='txt'>Produits</span> <FaShoppingBag /></NavLink>
                    {/* <NavLink to="/" activestyle="true">Page 2</NavLink> */}
                    {/* <NavLink to="/login" activestyle>Connexion</NavLink>  */}
                </NavMenu>
                <img className="logo"src={logo}/>
                <NavBtn>
                    <NavLink to="/login">
                    <span className='txt'> Mon compte </span> <FaUser />
                    </NavLink>
                    <NavLink to="/panier" element={<CartView />}>
                    <span className='txt'>Panier</span><FaShoppingCart/>
                    </NavLink>
                </NavBtn>
            </Nav>

            <div className='navMobile'>
                <NavLink className='but-mobile' to="/accueil" activestyle="true"> <FaHome size={25}/></NavLink>
                <NavLink className='but-mobile' to="/produits" activestyle="true"> <FaShoppingBag size={25} /></NavLink>
                <NavLink className='but-mobile' to="/login"><FaUser size={25} /></NavLink>
                <NavLink className='but-mobile' to="/panier" element={<CartView />}>
                  <FaShoppingCart size={25} />
                </NavLink>
            </div>
    </>
  );
};

export default Navigation;