import { Header } from "../components/Header";
import "./TrackingPage.css";
import { Link, useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";

export function TrackingPage({ cart }) {
  const [order, setOrder] = useState(null);

  const { orderId, productId } = useParams();

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrder(response.data);
    };
    fetchTrackingData();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const productItem = order.products.find((product) => product.productId === productId);

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" href="tracking-favicon.png" />
      <Header cart={cart}></Header>
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">Arriving on {dayjs(productItem.estimatedDeliveryTimeMs).format('dddd, MMMM D')}</div>

          <div className="product-info">
            {productItem.product.name}
          </div>

          <div className="product-info">Quantity:  {productItem.quantity}</div>

          <img
            className="product-image"
            src={`${productItem.product.image}`}
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
