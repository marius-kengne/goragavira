import React, { useContext, useState } from 'react';
import { CartContext } from '../Panier/CartContext';
import { Form, Button, Card } from 'react-bootstrap';

const Commande = () => {

  const { cartItems } = useContext(CartContext);

  const [delivery, setDelivery] = useState({ name: '', address: '', city: '', country: '' });
  const [payment, setPayment] = useState({ cardNumber: '', cardName: '', expirationDate: '', ccv: '' });

  let totalPrice = 0;
  if (cartItems && cartItems.length > 0) {
    totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  }

  return (
    <div className="container mb-6">
        <div className="container text-center">
      <h2 className='text-center mt-4'><strong>Commande</strong></h2>
      <h3>Produits sélectionnés :</h3>
      {cartItems.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} €
            </li>
          ))}
        </ul>
      )}

      <h3>Prix total : <strong>{totalPrice} €</strong></h3>
      </div>
      <Card className="mt-4">
        <Card.Body>
          <h3>Livraison</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Adresse</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre adresse" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>Ville</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre ville" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCountry">
              <Form.Label>Pays</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre pays" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Body>
          <h3>Informations de Paiement</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formCardNumber">
              <Form.Label>Numéro de carte bancaire</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre numéro de carte bancaire" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCardName">
              <Form.Label>Nom sur la carte</Form.Label>
              <Form.Control type="text" placeholder="Entrez le nom figurant sur la carte" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formExpirationDate">
              <Form.Label>Date d'expiration</Form.Label>
              <Form.Control type="text" placeholder="MM/AA" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCcv">
              <Form.Label>CCV</Form.Label>
              <Form.Control type="text" placeholder="Entrez le code CCV" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <Button variant="primary" className="mt-4">
        Confirmer la commande
      </Button>
    </div>
  );
};

export default Commande;
