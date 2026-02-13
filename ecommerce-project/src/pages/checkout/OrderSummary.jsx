import { DeliveryDate } from "./DeliveryDate";
import { CartItemDetail } from "./CartItemDetail";
import { DeliveryOptions } from "./DeliveyOptions";

export function OrderSummary({ cart, deliverOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliverOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliverOptions.find(
            (deliveryOption) => {
              return cartItem.deliveryOptionId === deliveryOption.id;
            }
          );
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <div className="cart-item-details-grid">
                <CartItemDetail cartItem={cartItem} />

                <DeliveryOptions
                  cartItem={cartItem}
                  deliverOptions={deliverOptions}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
