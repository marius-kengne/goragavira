import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Login.css';

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
            'username': login,
            'password' : password
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(`${consumerKey}:${consumerSecret}`), },
            body: JSON.stringify(apiParams)
        };
        /*
        const data = {
            //"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2Vpc2VlLWl0Lm8zY3JlYXRpdmUuZnIvMjAyMy9ncm91cGU1IiwiaWF0IjoxNjk4OTM2MDUyLCJuYmYiOjE2OTg5MzYwNTIsImV4cCI6MTY5OTU0MDg1MiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMiJ9fX0.NakPJjGrYdG3Fbr6gjA5QfwWp5NrnBEP2XTVnWs4Kk8",
            "user_email": "thomas@omicronn.fr",
            "user_nicename": "client",
            "user_display_name": "client",
            "code" : ""
        }

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
        */
        
        fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
            if (data.hasOwnProperty('token')) {
                setToken(data.token);
                sessionStorage.setItem('tokenUser', data.token)
                sessionStorage.setItem('userName', data.user_nicename)

                if (sessionStorage.getItem('isCommande') && sessionStorage.getItem('isCommande') === 'true') {
                    navigate('/commande')
                } else {
                    navigate('/accueil')
                }
                
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
        <Row className="connexion">
            <h2 className='text-center mt-4 '>Connexion</h2>

            {error && <Alert variant="danger">{error}</Alert>}

            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>

            <Form onSubmit={handleLogin} className='form-control'>
                <Form.Group controlId="formBasicEmail" className='mt-4'>
                    <Form.Label>Nom d'utilisateur</Form.Label>
                    <Form.Control
                        type="login"
                        placeholder="Entrez votre identifiant"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className='mt-4'>
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>

                {/* <Button className='connect-but' variant="primary" type="submit">
                Se connecter
                </Button> */}
                <div className='text-center mt-4 mb-4'>
                    <Button variant="primary" type="submit" style = {{background:"black"}}>
                        Se connecter
                    </Button>
                </div>
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