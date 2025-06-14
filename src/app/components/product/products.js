"use client";
import React, { useState } from "react";
import styles from "./products.module.css";
import Dropdown from "../Dropdown ";

import options from "../../../data/filter.json";
import Drawer from "../drawer";
import Productgrid from "../productgrid";

function Products() {
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
            <div>
              <Drawer options={options} />
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
        <div>
          <Productgrid />
        </div>
      </div>
    </div>
  );
}

export { Products };
