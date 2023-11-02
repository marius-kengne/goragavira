import React from 'react';
import'./FooterStyle.js'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import { Box, FooterContainer, Row, Column, FooterLink, Heading } from './FooterStyle.js';

const Footer = () => {
    return (
        <>
            <Box>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                A Computer Science Portal for Geeks!
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>A propos </Heading>
                        <FooterLink href="#">
                            Notre Objectif
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Témoignages
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Writing
                        </FooterLink>
                        <FooterLink href="#">
                            Internships
                        </FooterLink>
                        <FooterLink href="#">
                            Coding
                        </FooterLink>
                        <FooterLink href="#">
                            Teaching
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Uttar Pradesh
                        </FooterLink>
                        <FooterLink href="#">
                            Ahemdabad
                        </FooterLink>
                        <FooterLink href="#">
                            Indore
                        </FooterLink>
                        <FooterLink href="#">
                            Mumbai
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
        </>
        
    );
};

export default Footer;

{/* <div cl assName='footerContainer'>
            <p>Projet React: Tout droits reservés</p>
            <p className='icons'>
             <AiFillFacebook />
             <AiFillInstagram />
             <AiOutlineTwitter />
            </p>
        </div> */}