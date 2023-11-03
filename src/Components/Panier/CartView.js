import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import Main from '../Home/Main';
import './Panier.css';
import { auto } from '@popperjs/core';



const CartView = () => {

  const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);

  console.log("Produits du panier");
  console.log(cartItems);

    return (
 
        <div className={"panier"} style={{ maxHeight: '500px', overflowY: auto, marginBottom: '10px', display:'-ms-grid'}}>
            <h2>Mon Panier</h2>
            {cartItems.length === 0 ? (
            <p className="panierVide">Votre panier est vide.</p>
            ) : (
                <div>
                <ul>
                    {cartItems.map((item) => (
                    <li key={item.id} className="panier-item">
                        <div className='affichage-item'>
                        <div className="item-info">
                            <div className="item-image">
                            <img src={item.images[1].src} alt={item.slug} />
                            </div>
                            <div className="item-details">
                            <h3>{item.nom}</h3>
                            <p>Prix: {item.slug} €</p>
                            </div>
                        </div>
                        <div>
                            <div className="item-actions">
                            <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                                Supptimer le produit
                            </button>

                            <div className="quantite">
                                <button style={{ margin: "1%" }} onClick={(e) => {
                                    setCartItems((prevPanierProduits) => {
                                    const updatePanier = prevPanierProduits.map(
                                        (prevItem) =>
                                        prevItem.produit.id === item.produit.id
                                        ? { ...prevItem, quantite: item.quantite + 1 }
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
                                    
                                setCartItems((prevPanierProduits) => {
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
                                {} €
                        </p>
                    </div>
                    <center>
                    <button
                            className="checkout-button"
                            disabled={false}
                    >
                        Commander
                    </button>
                    </center>
                    </div>
                </div>
            )}
            </div>   
    );

};

export default CartView;