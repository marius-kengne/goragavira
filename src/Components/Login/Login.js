import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    //let history = useHistory();
    // password client : T3@%#&yWCF6#bIICO!czgq1p
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();
        // Ajoutez ici la logique de connexion
        console.log('Login : ', login);
        console.log('Mot de passe : ', password);
        //history.push('/accueil');
        /*
        try {
            const response = await fetch('https://eisee-it.o3creative.fr/2023/groupe5/wp-json/jwt-auth/v1/token');
            const data = await response.json();
            
            for (let donn of data) {
                if (donn.id ==141 && donn.slug == "accueil") {
                    console.log(donn);
                    console.log(donn.content.rendered);
                    setPosts(donn.content.rendered);
                }
            }
            
            } catch (error) {
            console.error('Error fetching posts: ', error);
        }
        */
    };

    return (
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={6}>
            <h2 className='text-center mt-4'>Connexion</h2>
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