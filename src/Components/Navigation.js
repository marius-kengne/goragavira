import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import'./Navigation.css'
import { Nav, NavMenu, NavBtn, NavLink, NavBtnLink, Bars } from './Navigation/NavElements';

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
                    <NavBtnLink to="/login">
                        Mon compte
                    </NavBtnLink>
                    <NavBtnLink to="/panier">
                        Mon Panier
                    </NavBtnLink>
                </NavBtn>
                
            </Nav>
        </>
    );
};

export default Navigation;