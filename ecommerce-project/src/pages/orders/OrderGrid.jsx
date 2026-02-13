import { OrderHeader } from "./OrderHeader";
import { OrderDetail } from "./OrderDetail";

export function OrderGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetail order={order} />
          </div>
        );
      })}
    </div>
  );
}
