import React from 'react';

const UserCartComponent = ({ cartCourses, deleteCourseFromCartFunction, totalAmountCalculationFunction, setCartCourses }) => {
  return (
    <div className={`cart ${cartCourses.length > 0 ? 'active' : ''}`}>
      <h2>Mon Panier</h2>
      {cartCourses.length === 0 ? (
        <p className="cartEmpty">Votre panier est vide.</p>
      ) : (
        <div>
          <ul>
            {cartCourses.map((item) => (
              <li key={item.product.id} className="cart-item">
                <div>
                  <div className="item-info">
                    <div className="item-image">
                      <img src={item.product.image} alt={item.product.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.product.name}</h3>
                      <p>Prix: {item.product.price} €</p>
                    </div>
                  </div>
                  <div>
                    <div className="item-actions">
                      <button
                        className="remove-button"
                        onClick={() => deleteCourseFromCartFunction(item.product)}
                      >
                        Supprimer le produit
                      </button>
                      <div className="quantity">
                        <button style={{ margin: "1%" }} onClick={() => {
                          setCartCourses((prevCartCourses) => {
                            const updatedCart = prevCartCourses.map(
                              (prevItem) =>
                                prevItem.product.id === item.product.id
                                  ? { ...prevItem, quantity: item.quantity + 1 }
                                  : prevItem
                            );
                            return updatedCart;
                          });
                        }}>
                          +
                        </button>
                        <p className='quant'>{item.quantity} </p>
                        <button onClick={() => {
                          setCartCourses((prevCartCourses) => {
                            const updatedCart = prevCartCourses.map(
                              (prevItem) =>
                                prevItem.product.id === item.product.id
                                  ? { ...prevItem, quantity: Math.max(item.quantity - 1, 0) }
                                  : prevItem
                            );
                            return updatedCart;
                          });
                        }}>
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-section">
            <div className="checkout-total">
              <p className="total">Montant Total: {totalAmountCalculationFunction()} €</p>
            </div>
            <button
              className="checkout-button"
              disabled={cartCourses.length === 0 || totalAmountCalculationFunction() === 0}
            >
              Procéder au paiement
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCartComponent;
