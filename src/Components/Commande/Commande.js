import React, { useContext, useState } from 'react';
import { CartContext } from '../Panier/CartContext';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Commande = () => {

  const { cartItems, resetCart  } = useContext(CartContext);

  const [delivery, setDelivery] = useState({ firstName: '', lastName: '', address1: '',address2: '', city: '', postcode: '', country: '' });
  const [payment, setPayment] = useState({ cardNumber: '', cardName: '', expirationDate: '', ccv: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate()
  const tokenUser = sessionStorage.getItem('tokenUser')
  const [commandes, setCommande] = useState([]);

  let totalPrice = 0;
  if (cartItems && cartItems.length > 0) {
    totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  }

  const lineItems = [];
  cartItems.forEach(produit => {
    lineItems.push({ "product_id": produit.id, "quantity": 1 });
  });

  const handleConfirmation = async(e) => {
    //e.preventDefault();

    // appel API pour le paiement
    const data = {
        "type": "CarteBlanche",
        "out": "payement valide"
    }

    if (data.out && data.out == "payement valide") {
        console.log("appel api commande woocommerce");
        
        const consumerKey = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
        const consumerSecret = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';
        
    
        const apiUrl = 'https://eisee-it.o3creative.fr/2023/groupe5/wp-json/wc/v3/';
        const data = {
            "payment_method": "bacs",
            "payment_method_title": "Direct Bank Transfer",
            "set_paid": true,
            "billing": {
              "first_name": delivery.firstName,
              "last_name": delivery.lastName,
              "address_1": delivery.address1,
              "address_2": delivery.address2,
              "city": delivery.city,
              "state": "CA",
              "postcode": delivery.postcode,
              "country": delivery.country,
              "email": "",
              "phone": ""
            },
            "shipping": {
              "first_name": delivery.firstName,
              "last_name": delivery.lastName,
              "address_1": delivery.address,
              "address_2": delivery.address2,
              "city": delivery.city,
              "state": "CA",
              "postcode": delivery.postcode,
              "country": delivery.country
            },
            "line_items": lineItems,
            "shipping_lines": [
              {
                "method_id": "flat_rate",
                "method_title": "Flat Rate",
                "total": totalPrice
              }
            ]
        }

        console.log("affichage valeur de data" +JSON.stringify(data));

        console.log("affichage valeur de " +delivery);
        console.log("affichage valeur de " +payment);
        
        fetch(apiUrl + 'orders', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(`${consumerKey}:${consumerSecret}`),
        },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log("result listing commande");
            setCommande(result);
            if (result.status && result.status == "pending") {
                setSuccess("Votre commande a bien été prise en compte !!")
                navigate('/commande')
                resetCart();
               
            } else {
                setError("La commande n'a pas pu être finalisée")
            }
            console.log(JSON.stringify(result));
            //console.log("affichage valeur de " +delivery);
            //console.log("affichage valeur de " +payment);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
        
    } else {

        setError("Echec de paiement. Vérifier vos informations de carte")
        navigate('/commande')

    }
    
    };

  return (
    <div className="container mb-6 ">

    <div className="container text-center pt-5">
      <h2 className='text-center mt-4'><strong>Commande</strong></h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <h3>Produits sélectionnés :</h3>
      {cartItems.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <ul className='list-unstyled mb-0' style={{ listStyleType: 'none' }}>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} €
            </li>
          ))}
        </ul>
      )}

      <h3>Prix total : <strong>{totalPrice} €</strong></h3>
    </div>
      



    <Container className="mt-4">
  <Row className="justify-content-center">
    <Col xs={12} md={6}>
      <Card>
        <Card.Body>
          <h3 className="text-center">Livraison</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre prénom" value={delivery.firstName}
                    onChange={(e) => setDelivery({ ...delivery, firstName: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" value={delivery.lastName}
                    onChange={(e) => setDelivery({ ...delivery, lastName: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress1">
              <Form.Label>Ligne adresse 1</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre Ligne adresse 1" value={delivery.address1}
                    onChange={(e) => setDelivery({ ...delivery, address1: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress2">
              <Form.Label>Ligne adresse 2</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre Ligne adresse 2" value={delivery.address2}
                    onChange={(e) => setDelivery({ ...delivery, address2: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>Ville</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre ville" value={delivery.city}
                    onChange={(e) => setDelivery({ ...delivery, city: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPostcode">
              <Form.Label>Code postal</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre code postal" value={delivery.postcode}
                    onChange={(e) => setDelivery({ ...delivery, postcode: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCountry">
              <Form.Label>Pays</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre pays" value={delivery.country}
                    onChange={(e) => setDelivery({ ...delivery, country: e.target.value })} />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  </Row>

    <Row className="justify-content-center mt-4">
        <Col xs={12} md={6}>
        <Card>
            <Card.Body>
            <h3 className="text-center">Informations de Paiement</h3>
            <Form>
            <Form.Group className="mb-3" controlId="formCardNumber">
              <Form.Label>Numéro de carte bancaire</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre numéro de carte bancaire" value={payment.cardNumber}
                    onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCardName">
              <Form.Label>Nom sur la carte</Form.Label>
              <Form.Control type="text" placeholder="Entrez le nom figurant sur la carte" value={payment.cardName}
                    onChange={(e) => setPayment({ ...payment, cardName: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formExpirationDate">
              <Form.Label>Date d'expiration</Form.Label>
              <Form.Control type="text" placeholder="MM/AA" value={payment.expirationDate}
                   onChange={(e) => setPayment({ ...payment, expirationDate: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCcv">
              <Form.Label>CCV</Form.Label>
              <Form.Control type="text" placeholder="Entrez le code CCV" value={payment.ccv}
                    onChange={(e) => setPayment({ ...payment, ccv: e.target.value })} />
            </Form.Group>
          </Form>
            </Card.Body>
        </Card>
        </Col>
    </Row>

    <Row className="justify-content-center mt-4">
        <Col xs={12} md={6}>
        <Button variant="primary" className="w-100" onClick={() => handleConfirmation(cartItems)}>
            CONFIRMER LA COMMANDE
        </Button>
        </Col>
    </Row>
    </Container>

    </div>



    
  );
};

export default Commande;
