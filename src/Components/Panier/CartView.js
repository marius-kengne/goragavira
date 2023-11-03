import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import Main from '../Home/Main';
import './Panier.css';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
const CartView = () => {

  const navigate = useNavigate()
  const { cartItems } = useContext(CartContext);

  console.log("Produits du panier");
  console.log(cartItems);
  const tokenUser = sessionStorage.getItem('tokenUser') 

  let totalPrice = 0;
  if (cartItems && cartItems.length > 0) {
    totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  }

  const handleCommander = async(e) => {
        //e.preventDefault();
    
        if (tokenUser && tokenUser != "") {
            //sessionStorage.setItem('PanierUser', cartItems)
            navigate('/commande')
            
        } else {
            sessionStorage.setItem('isCommande', 'true')
            navigate('/login')
        }

    };

    return (
 
        <div className={"panier"}>
            <h2>Mon Panier</h2>
            {cartItems.length === 0 ? (
            <p className="panierVide">Votre panier est vide.</p>
            ) : (
                <div>
                <ul>
                    {cartItems.map((item) => (
                    <li key={item.id} className="panier-item">
                        <div>
                        <div className="item-info">
                            <div className="item-image">
                            <img src={item.images[1].src} alt={item.slug} />
                            </div>
                            <div className="item-details">
                            <h3>{item.name}</h3>
                            <p>Prix: {item.price} €</p>
                            </div>
                        </div>
                        <div>
                            <div className="item-actions">
                            <button className="remove-button">
                                Supprimer le produit
                            </button>
                            
                            </div>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} className="checkout-section text-center">
                        <div className="checkout-total">
                            <p className="total">
                            Montant total : <strong>{totalPrice} €</strong>
                            </p>
                        </div>
                        <Button
                            onClick={() => handleCommander(cartItems)}
                            className="checkout-button"
                            disabled={false}
                        >
                            Commander
                        </Button>
                        </Col>
                    </Row>
                    </Container>
                </div>
            )}
            </div>
       


        
    );

};

export default CartView;