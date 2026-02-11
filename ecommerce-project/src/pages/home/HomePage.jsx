import "./HomePage.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductGrid } from "./ProductGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHomePgaeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    fetchHomePgaeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
