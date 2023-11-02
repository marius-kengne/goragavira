import React from 'react';

const AfficheProduit = ({ produits, fctFilterProduit, fctAjouterProduitPanier }) => {
  
  return (
    <div className='produit-list'>
        {fctFilterProduit.length === 0 ? (
                <p className="no-results">
                    Désolé, Le produit que vous cherchez n'est pas trouvé.
                </p>
            ) : (
                fctFilterProduit.map((produit) => (
                    <div className="produit" key={produit.id}>
                        <img src={produit.image} alt={produit.nom} />
                        <h2>{produit.nom}</h2>
                        <p>Prix: {produit.prix} €</p>
                        <button
                            className="btn-ajouter-panier"
                            onClick={() => fctAjouterProduitPanier(produit)}
                            
                            
                        >
                            Ajouter au panier
                        </button>
                    </div>
                ))
            )}
    </div>
  );
};

export default AfficheProduit;