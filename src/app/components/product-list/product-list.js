import React from "react";
import styles from "./product-list.module.css";
import ProductCard from "../product-card";

function ProductList({ products }) {
  return (
    <div className={styles.productList}>
      {products.map((product, _) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export { ProductList };
