import React from "react";
import style from "./products.module.css";

function Products() {
  return (
    <div className={style.main}>
      <div className={style.headingBox}>
        <p className={style.heading}>DISCOVER OUR PRODUCTS</p>
        <p className={style.subheading}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </div>
  );
}

export { Products };
