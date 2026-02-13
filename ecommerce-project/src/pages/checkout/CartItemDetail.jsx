import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";

export function CartItemDetail({ cartItem, loadCart }) {
  const [update, setUpdate] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const updateCartItem = async () => {
    setUpdate(!update);
    if (update) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity,
      });
      await loadCart();
      setUpdate(false);
    }
  };

  const updateWithKeys = async(event)=>{
      if(event.key === 'Enter'){
        if (update) {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity,
          });
          await loadCart();
          setUpdate(false);
        }
      }else if(event.key === 'Escape'){
        setUpdate(false);
      }
  }

  const selectQuantity = (event) => {
    const selectedQuantity = Number(event.target.value);
    setQuantity(selectedQuantity);
  };

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />
      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            <input
              value={quantity}
              onChange={selectQuantity}
              onKeyDown={updateWithKeys}
              className="cart-update-quantity"
              type="text"
              style={{
                opacity: update ? 1 : 0,
                width: update ? "50px" : "0px",
              }}
            />
            <span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateCartItem}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}
