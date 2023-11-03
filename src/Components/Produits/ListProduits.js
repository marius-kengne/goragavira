import React, { useState, useContext, useEffect } from 'react';
import './Produits.css';
import { Link } from 'react-router-dom';
import '../Produits/Produits.css';
import { CartContext } from '../Panier/CartContext';
import { FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

const ListProduit = () => {

    const { addToCart } = useContext(CartContext);

    const consumerKey = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
    const consumerSecret = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState();
    const [searchCategory, setSearchCategory] = useState([]);

    const apiUrl = 'https://eisee-it.o3creative.fr/2023/groupe5/wp-json/wc/v3/';

    useEffect(() => {
        let url = apiUrl + 'products';

        if (searchCategory != '') {
            if(searchCategory == "Volcanique"){
                url += `?category=25`;
            }else if(searchCategory == "Compostelle"){
                url += `?category=22`;
            }
            else{
                url += `?category=${searchCategory}`;
            }
            
        }

        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(`${consumerKey}:${consumerSecret}`),
            },
        })
        .then(response => response.json())
        .then(data => {
            setProducts(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
    }, [searchCategory]);

    const handleSearch = () => {

        if(searchCategory == "Volcanique"){
            setCategory(25);
        }else if(searchCategory == "Compostelle"){
            setCategory(22);
        }else {
            setCategory(searchCategory);
        }
        
    };

    return (
        <div className='listProduits'>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Rechercher par catégorie"
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                    />
                    <button onClick={handleSearch}>Rechercher</button>
                </div>
            
            <div className="products-cont">
                <div className = "products">
                    {products.map((product) => (
                        <div className='prod' key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <img className="img" src={product.images[0].src} alt={product.name} />
                            </Link>
                            <div className="title">
                                <div>
                                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                                </div>                            
                                <div onClick={() => {
                                    addToCart(product)
                                    window.alert("Produit ajouté avec success !");
                                }}>

                                    <FaShoppingCart size={18} />
                                </div>
                            </div>
                            <div className="price">  {product.price} €</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListProduit;