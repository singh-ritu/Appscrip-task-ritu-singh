"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./products.module.css";
import Dropdown from "../dropdown ";

import options from "../../../data/filter.json";
import Drawer from "../drawer";
import ProductList from "../product-list";
import arrow from "@/assets/arrow.svg";

function Products() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          <div className={styles.itembox}>
            <p className={styles.items}>3425 ITEMS</p>
          </div>
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className={`${styles.content} ${
              isDrawerOpen ? styles.shifted : ""
            }`}>
            {isDrawerOpen ? "HIDE FILTER" : "SHOW FILTER"}
            <Image src={arrow} alt="arrow" />
          </button>
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
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export { Products };
