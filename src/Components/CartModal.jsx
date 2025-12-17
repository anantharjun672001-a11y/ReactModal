import React from "react";

const CartModal = ({ cart, closeModal, removeFromCart }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={closeModal}>X</button>
        <h2>Cart Items</h2>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartModal;
