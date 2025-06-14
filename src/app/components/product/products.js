"use client";
import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
import Dropdown from "../Dropdown ";
import products from "../../data.json";
import Card from "../Card";

function Products() {
  const [clicked, setClicked] = useState(false);
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await fetch("https://fakestoreapi.com/products");
  //       if (!res.ok) throw new Error("failed to fetch products");
  //       const data = await res.json();
  //       console.log(data);
  //       setProducts(data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  // if (error) return <p>Error: {error}</p>;
  return (
    <div className={styles.main}>
      <div className={styles.headingBox}>
        <p className={styles.heading}>DISCOVER OUR PRODUCTS</p>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className={styles.navbar}>
        <div className={styles.items}>
          <p>3425 ITEMS</p>
          <Dropdown options={[]} defaultOption="HIDE FILTER" />
        </div>
        <Dropdown
          options={[
            "RECOMMENDED",
            "NEWEST FIRST",
            "POPULAR",
            "PRICE: HIGH TO LOW",
            "PRICE: LOW TO HIGH",
          ]}
          defaultOption="RECOMMENDED"
        />
      </div>
      <div className={styles.productgrid}>
        {products.map((product, _) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export { Products };
