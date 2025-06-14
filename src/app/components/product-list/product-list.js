import React from "react";
import styles from "./product-list.module.css";
import Card from "@/app/components/card";

function Productgrid({ products }) {
  return (
    <div className={styles.productgrid}>
      {products.map((product, _) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}

export { Productgrid };
