import React from "react";
import styles from "./productgrid.module.css";
import Card from "../Card";
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
