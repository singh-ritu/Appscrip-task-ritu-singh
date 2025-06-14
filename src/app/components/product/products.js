"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./products.module.css";
import Dropdown from "@/app/components/dropdown";
import options from "../../../data/filter.json";
import Drawer from "../drawer";
import ProductList from "../product-list";
import arrow from "@/assets/arrow.svg";
import useDevice from "@/app/hooks/useDevice";

function Products({ initialProducts }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isNav = useDevice();

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
        {isNav ? (
          <div className={styles.mobilenavbar}>
            <p className={styles.navbartext}>FILTER</p>
            <div className={styles.divider} />
            <p className={styles.navbartext}>RECOMMENDED</p>
          </div>
        ) : (
          <div className={styles.navbar}>
            <div className={styles.filterBtnContainer}>
              <div className={styles.itembox}>
                <p className={styles.items}>3425 ITEMS</p>
              </div>
              <div className={styles.btn}>
                <Image
                  src={arrow}
                  alt="arrow"
                  className={` ${isDrawerOpen ? styles.img : ""}`}
                />
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
        )}
        <div className={styles.flex}>
          <Drawer options={options} isDrawerOpen={isDrawerOpen} />
          <ProductList products={initialProducts} />
        </div>
      </div>
    </div>
  );
}

export { Products };
