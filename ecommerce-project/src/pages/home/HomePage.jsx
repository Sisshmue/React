import "./HomePage.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductGrid } from "./ProductGrid";
import { useSearchParams } from "react-router";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchHomePgaeData = async () => {
      const response = search
        ? await axios.get(`/api/products?search=${search}`)
        : await axios.get("/api/products");

      setProducts(response.data);
    };
    fetchHomePgaeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
