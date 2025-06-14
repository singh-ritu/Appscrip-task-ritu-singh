import React from "react";
import styles from "./product-grid.module.css";
import Card from "../card";
import products from "../../data.json";

function Productgrid() {
  return (
    <div className={styles.productgrid}>
      {products.map((product, _) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}

export { Productgrid };
