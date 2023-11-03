import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import './Footer.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <MDBFooter className='text-center footer-text' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        {/* <section className='mb-3 d-flex justify-content-center justify-content-lg-between p-3 border-bottom'> */}
        <section className='mb-3 d-flex justify-content-center p-3 border-bottom' >
          <div className='me-5 mt-4 justify-content-lg-between'>
            <span>Visitez nos reseaux sociaux.</span>
          </div>
          <MDBBtn outline color="light" className='m-3' href='https://www.facebook.com/'>
            <MDBIcon fab icon='facebook-f' /> 
          </MDBBtn>

          <MDBBtn outline color="light" className='m-3' href='https://www.instagram.com/'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" className='m-3' href='https://twitter.com/?lang=fr' >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>


          <MDBBtn outline color="light" className='m-3' href='https://www.linkedin.com/'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" className='m-3' href='https://www.youtube.com/'>
            <MDBIcon fab icon='youtube' />
          </MDBBtn>


        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Inscrivez-vous à notre newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' placeholder='adresseemail@gmail.com' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Abonnez vous
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Groupe5-Woocommerce</h5>
              <p>
                Notre entreprise est dédiée à fournir des produits de haute qualité à nos clients et engage  
                à offrir une expérience de shopping exceptionnelle en ligne, en mettant l'accent sur leurs satisfactions.
  
                {/* Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter. 
                Notre équipe est là pour vous aider du lundi au vendredi, de 9h à 18h. */}
              </p>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Produits Utiles</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.bleu-bonheur.fr/femme/categories/vetements/gilets.html' className='text-white'>
                    Gilets
                  </a>
                </li>
                <li>
                  <a href='https://www.bleu-bonheur.fr/femme/categories/vetements/parkas-et-manteaux-et-impermeables.html' className='text-white'>
                    Parkas et Maneaux
                  </a>
                </li>
                <li>
                  <a href='https://www.bleu-bonheur.fr/femme/categories/vetements/chemisiers-et-blouses.html' className='text-white'>
                    Chemises et Blouses
                  </a>
                </li>
                <li>
                  <a href='https://www.bleu-bonheur.fr/femme/categories/vetements/robes.html' className='text-white'>
                    Robes
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Nos Localisation</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Pontoise, Saint-Martin
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Cergy Saint-Christophe
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Paris, Arrondissement 13
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Montigny Beauchamp
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    contact-groupe5-2023@esiee-it.fr
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Whatsapp: +33 7 60 34 29 56
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className='text-white'>
          &copy; 2023 Groupe5WooCommerce. Tous droits réservés.
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
