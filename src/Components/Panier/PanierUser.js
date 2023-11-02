import React from 'react';

const PanierUser = ( { panierProduits, fctSupprimerProduitPanier, fctMontantTotal, setPanierProduits }) => {
  
  return (
    <div className={`panier ${panierProduits.length > 0 ? 'active' : ''}`}>
      <h2>Mon Panier</h2>
      {panierProduits.length === 0 ? (
      <p className="panierVide">Votre panier est vide.</p>
      ) : (
        <div>
          <ul>
            {panierProduits.map((item) => (
              <li key={item.produit.id} className="panier-item">
                <div>
                  <div className="item-info">
                    <div className="item-image">
                      <img src={item.produit.image} alt={item.produit.nom} />
                    </div>
                    <div className="item-details">
                      <h3>{item.produit.nom}</h3>
                      <p>Prix: {item.produit.prix} €</p>
                    </div>
                  </div>
                  <div>
                    <div className="item-actions">
                      <button className="remove-button"
                              onClick={() => fctSupprimerProduitPanier(item.produit)}
                      >
                        Supptimer le produit
                      </button>
                      <div className="quantite">
                        <button style={{ margin: "1%" }} onClick={(e) => {
                            setPanierProduits((prevPanierProduits) => {
                            const updatePanier = prevPanierProduits.map(
                                (prevItem) =>
                                prevItem.produit.id === item.produit.id
                                ? { ...prevItem, quantite: 
                                item.quantite + 1 }
                                : prevItem
                                );
                                return updatePanier;
                            })
                        }}
                        >
                        +
                        </button>
                        <p className='quant'>{item.quantite} </p>
                        <button onClick={(e) => {
                          setPanierProduits((prevPanierProduits) => {
                            const updatePanier = prevPanierProduits.map(
                              (prevItem) => prevItem.produit.id === item.produit.id
                              ? { ...prevItem, quantite:
                              Math.max(item.quantite - 1, 0) }
                              : prevItem
                            );
                            return updatePanier;
                          })
                        }}
                        >
                        -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
            <div className="checkout-section">
              <div className="checkout-total">
                <p className="total">Montant Total: 
                        {fctMontantTotal()} €
                </p>
              </div>
              <button
                    className="checkout-button"
                    disabled={panierProduits.length === 0 || 
                    fctMontantTotal() === 0}
              >
                Proceder au paiement
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default PanierUser;