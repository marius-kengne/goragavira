import React from 'react';
import { Nav, NavMenu, NavLink, NavBtn, NavBtnLink, Bars } from './NavElements.js';
import CartView from '../Panier/CartView.js';

const Navigation = () => {
  return (
    <>
           <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/accueil" activestyle="true">Accueil</NavLink>
                    <NavLink to="/produits" activestyle="true">Produits</NavLink>
                    <NavLink to="/" activestyle="true">Page 2</NavLink>

                    {/* <NavLink to="/login" activestyle>Connexion</NavLink>        */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">Mon compte</NavBtnLink>
                    <NavBtnLink to="/panier" element={<CartView />}>Mon Panier</NavBtnLink>
                </NavBtn>
                
            </Nav>
    </>
  );
};

export default Navigation;