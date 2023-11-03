import React, { useContext, useState } from 'react';
import {useParams} from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import { CartContext } from '../Panier/CartContext';

const Produit = () => {
    const i = 1;
    const {id} = useParams();
    const consumerKey = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
    const consumerSecret = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';
    const [product, setProduct] = useState([]);
    const [selectedSize, setSelectedSize] = useState();
    const { cartItems, setCartItems, removeFromCart, addToCart} = useContext(CartContext);


    const apiUrl = 'https://eisee-it.o3creative.fr/2023/groupe5/wp-json/wc/v3/products/';

    fetch(apiUrl + id, {
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + btoa(`${consumerKey}:${consumerSecret}`),
    },
    })
    .then(response => response.json())
    .then(data => {
        setProduct(data);
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };
    
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);

      const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

      
  return (
    <div className="product-description">
        <div><img className="img"src={product.images}/></div>
        <div className='cont-description'>
            <div className="title">{product.name}<div >{product.slug}</div></div>
            
            <div className="price">{product.price} €</div>
            <div className="size-cont" >
                <div htmlFor="sizeSelect">Sélectionnez la taille :</div>
                <select className='sizeSelect' id="sizeSelect" value={selectedSize} onChange={handleSizeChange}>
                    <option value="taille-unique">Taille unique</option>
                </select>
            </div>
            <div className='add-cont'>
                <button className='add-but' onClick={() => addToCart(product)}>Ajouter au panier</button>
            </div>
            <div>
            <div className="htmlDetailText" onClick={toggleDropdown}>
                {isDropdownOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                INFORMATIONS PRODUIT
            </div>
            {isDropdownOpen && (
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
            )}
            </div>
                </div>
                
    </div>
  );

};

export default Produit;