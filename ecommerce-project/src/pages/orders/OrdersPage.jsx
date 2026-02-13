import "./OrdersPage.css";
import { Header } from "../../components/Header";
import { useState, Fragment } from "react";
import { useEffect } from "react";
import axios from "axios";
import { OrderGrid } from "./OrderGrid";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async()=>{
      const response = await axios.get("/api/orders?expand=products")
      console.log(response.data);
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrderGrid orders={orders}/>

      </div>
    </>
  );
}
