import React, { useContext, useState } from 'react';
import ProductList from './ProductList';
import CartView from './CartView';

const MainProducts = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Produit 1', price: 10 },
        { id: 2, name: 'Produit 2', price: 15 },
        { id: 3, name: 'Produit 3', price: 20 },
      ]);

      const [cartItems, setCartItems] = useState([]);
    
    const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    };

    console.log("################ Vue MainProducts");
      return (
        <div>
          <ProductList products={products} addToCart={addToCart} />
          
        </div>
      );
};

export default MainProducts;