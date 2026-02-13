import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";

export function DeliveryOptions({ cartItem, deliverOptions, loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliverOptions.map((deliverOption) => {
        let priceString = "Free Shipping";

        if (deliverOption.priceCents > 0) {
          priceString = `${formatMoney(deliverOption.priceCents)} - Shipping`;
        }

        const updateDeliveryOption = async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliverOption.id,
          });
          await loadCart();
        };

        return (
          <div
            key={deliverOption.id}
            className="delivery-option"
            onClick={updateDeliveryOption}
          >
            <input
              type="radio"
              checked={deliverOption.id === cartItem.deliveryOptionId}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliverOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
