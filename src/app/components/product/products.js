"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./products.module.css";
import Dropdown from "../dropdown ";

import options from "../../../data/filter.json";
import Drawer from "../drawer";
import ProductList from "../product-list";
import arrow from "@/assets/arrow.svg";

function Products() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("failed to fetch products");
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);

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

      <div className={styles.maindescription}>
        <div className={styles.navbar}>
          <div
            style={{
              display: "flex",
              gap: "80px",
            }}>
            <div className={styles.itembox}>
              <p className={styles.items}>3425 ITEMS</p>
            </div>
            <div className={styles.btn}>
              <Image src={arrow} alt="arrow" className={styles.img} />
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className={styles.btn}>
                {isDrawerOpen ? "HIDE FILTER" : "SHOW FILTER"}
              </button>
            </div>
          </div>
          <div>
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
        </div>
        <div style={{ display: "flex", position: "relative" }}>
          <Drawer options={options} isDrawerOpen={isDrawerOpen} />
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export { Products };
