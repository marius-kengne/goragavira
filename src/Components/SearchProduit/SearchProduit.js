import React from 'react';

const SearchProduit = ({ searchProduit, fctSearchProduit }) => {
  return (
    <div>
      <header className='panierHeader'>
       <h1>Panier WooCommerce</h1>
       <div className='searchBar'>
        <input type='text' placeholder='Chercher votre produit...' value={ searchProduit } onChange={fctSearchProduit}/>
       </div>
      </header>
    </div>
  );
};

export default SearchProduit;