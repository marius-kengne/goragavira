import React from 'react';
import { Link } from 'react-router-dom';
import'./Navigation.css'

const Navigation = () => {
    return (
        <div className ='header'>
            <nav>
                <ul>
                    <li>
                    <Link to="/accueil">Accueil</Link>
                    </li>
                    <li>
                    <Link to="/produits">Produits</Link>
                    </li>
                    <li>
                    <Link to="/">Page 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;