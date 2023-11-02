import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //let history = useHistory();
    // password client : T3@%#&yWCF6#bIICO!czgq1p
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault();
        // Ajoutez ici la logique de connexion
        console.log('Login : ', login);
        console.log('Mot de passe : ', password);

        const consumerKey = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
        const consumerSecret = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';
    
        const apiUrl = 'https://eisee-it.o3creative.fr/2023/groupe5/wp-json/jwt-auth/v1/token';
        const apiParams = {
            "username": login,
            "password" : password
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(apiParams)
        };

        fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
            if (data.hasOwnProperty('token')) {
                setToken(data.token);
                sessionStorage.setItem('tokenUser', data.token)
                navigate('/accueil')
            } else if(data.hasOwnProperty('code')) {
                const code = data.code
                if (code.includes("invalid_username")) {
                    setError("Le nom d'utilisateur " +login+ " n'est pas enregistré sur ce site");
                } else if(code.includes("incorrect_password")) {
                    setError("Le mot de passe saisi pour l'utilisateur " + login + " est incorrect");
                }else{
                    setError("Identifiants incorrects");
                }
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
    };

    return (
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={6}>
            <h2 className='text-center mt-4'>Connexion</h2>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Login</Form.Label>
                <Form.Control
                    type="login"
                    placeholder="Entrez votre login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className='mt-4'>
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>

                <Button className='mt-4' variant="primary" type="submit">
                Se connecter
                </Button>

                <Link to="/register">
                <Button variant="secondary">Inscription</Button>
                </Link>
            </Form>
            </Col>
        </Row>
        </Container>
    );

    /*return (
        <div>
            Connexion
        </div>
    );*/
};

export default Login;