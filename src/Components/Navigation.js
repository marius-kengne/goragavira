import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/accueil">Accueil</Link>
                    </li>
                    <li>
                    <Link to="/">Page 1</Link>
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