import React from "react";
import styles from "./product-list.module.css";
import Card from "../card";

function ProductList({ products }) {
  return (
    <div className={styles.productList}>
      {products.map((product, _) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}

export { ProductList };
