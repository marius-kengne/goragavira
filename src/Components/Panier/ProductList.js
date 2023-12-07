import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import '../Produits/Produits.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//const ProductList = ({ products }) =>
const ProductList = ({  }) => {

    
  const { addToCart } = useContext(CartContext);

  const addToCartWithNotification = (product) => {
    addToCart(product); // Ajoutez le produit au panier
    toast.success('Produit ajouté au panier', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  /*
  const [cartItems, setCartItems] = useState([]);
    
  const addToCart = (data) => {
    console.log("ajout d'un produit");
    setCartItems([...cartItems, data]);
    console.log(data);
    //console.log(cartItems);
  };
  */
  const consumerKey = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
  const consumerSecret = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';
  const [products, setProducts] = useState([]);

  const apiUrl = 'https://eisee-it.o3creative.fr/2023/groupe5/wp-json/wc/v3/';

  fetch(apiUrl + 'products', {
  method: 'GET',
  headers: {
      'Authorization': 'Basic ' + btoa(`${consumerKey}:${consumerSecret}`),
  },
  })
  .then(response => response.json())
  .then(data => {
      setProducts(data);
      //console.log(data);
  })
  .catch(error => {
      console.error('Erreur lors de la récupération des données :', error);
  });


  return (
        <div>
            <div className="filter-cont"></div>
            <div className="products-cont">
                <div className = "products">
                    {products.map((product) => (
                        <div className='product' key={product.id}>
                            <h2>{product.name}</h2>
                            <p>{product.slug}</p>
                            <img className="img" src={product.images[2].src}/>
                            {/* <button className='btn btn-primary' onClick={() => addToCart(product)}>Ajouter au panier</button> */}
                            <button className='btn btn-primary' onClick={() => addToCartWithNotification(product)}>Ajouter au panier</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  
};

export default ProductList;