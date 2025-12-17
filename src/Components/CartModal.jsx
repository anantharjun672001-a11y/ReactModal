import React, { useEffect } from "react";

const CartModal = ({ cart, closeModal, removeFromCart }) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

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
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}

        <hr />
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartModal;
