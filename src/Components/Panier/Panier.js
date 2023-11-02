import React, { useEffect, useState } from 'react';
import './Panier.css';
import AfficheProduit from '../SearchProduit/AfficheProduit';
import PanierUser from './PanierUser';
import SearchProduit from '../SearchProduit/SearchProduit';

const Panier = () => {

  const [produits, setProduits] = useState([
        { id: 1, 
          nom: 'GFG T-shirt', 
          prix: 499, 
          image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png'
        },
        { id: 2, 
          nom: 'GFG Bag', 
          prix: 699, 
          image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165553/gfg2.jpg'
        },
        { id: 3, 
          nom: 'GFG Hoodie', 
          prix: 799, 
          image: 
'https://media.geeksforgeeks.org/wp-content/uploads/20230823165623/gfg3.jpg'
        }
    ]);
///////////////////////////


// const consumerKey = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
//     const consumerSecret = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';
//     const [products, setProducts] = useState([]);

//     const apiUrl = 'https://eisee-it.o3creative.fr/2023/groupe5/wp-json/wc/v3/';

//     fetch(apiUrl + 'products', {
//     method: 'GET',
//     headers: {
//         'Authorization': 'Basic ' + btoa(`${consumerKey}:${consumerSecret}`),
//     },
//     })
//     .then(response => response.json())
//     .then(data => {
//         setProducts(data);
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Erreur lors de la récupération des données :', error);
//     });

    //////////////////////////////

    const [panierProduits, setPanierProduits] = useState([]);
    const [searchProduit, setSearchProduits] = useState('');
 
    const fctAjouterProduitPanier = (GFGcourse) => {
        const existProduits = panierProduits.find(item => item.produit.id === GFGcourse.id);
        if (existProduits) {
            const lastUpdatePanier = panierProduits.map(item =>
                item.produit.id === GFGcourse.id ? { 
                ...item, quantite: item.quantite + 1 } 
                : item
            );
            setPanierProduits(lastUpdatePanier);
        } else {
            setPanierProduits([...panierProduits, {produit: GFGcourse, quantite: 1}]);
        }
    };

    const fctSupprimerProduitPanier = (GFGCourse) => {
        const updatePanier = panierProduits.filter(item => item.produit.id !== GFGCourse.id);
        setPanierProduits(updatePanier);
    };
 
    const fctMontantTotal = () => {
        return panierProduits.reduce((total, item) => total + item.produit.prix * item.quantite, 0);
    };
    
    const fctProduitSearchByUser = (event) => {
        setSearchProduits(event.target.value);
    };
 
    const fctFilterProduit = produits.filter((prod) =>
        prod.nom.toLowerCase().includes(searchProduit.toLowerCase())
    );


  return (
      <div className="panier">
            <SearchProduit 
              searchProduit={searchProduit} 
              fctProduitSearchByUser={fctProduitSearchByUser} 
            />
            <main className="panierMain">
                <AfficheProduit
                    produits={produits}
                    fctFilterProduit={fctFilterProduit}
                    fctAjouterProduitPanier={fctAjouterProduitPanier}
                />
 
                <PanierUser
                    panierProduits={panierProduits}
                    fctSupprimerProduitPanier={fctSupprimerProduitPanier}
                    fctMontantTotal={fctMontantTotal}
                    setPanierProduits={setPanierProduits}
                />
          </main>
      </div>
  );
};


export default Panier;