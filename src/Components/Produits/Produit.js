import React, { useState } from 'react';
import {useParams} from 'react-router-dom';

const Produit = () => {

    const {id} = useParams();
    const consumerKey = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
    const consumerSecret = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';
    const [product, setProduct] = useState([]);

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


    return (
        <div>
            <div className="product-cont">
                <div className = "product">
                    <div><img className="img"src={product.images}/></div>
                    <div className='details-cont'>
                        <h2>{product.name}</h2>
                        <div class="htmlDetailText" dangerouslySetInnerHTML={{__html: product.description}} />
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Produit;