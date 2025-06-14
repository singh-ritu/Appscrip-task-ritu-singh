import Image from "next/image";
import styles from "./card.module.css";
import React, { useState } from "react";
import heartFull from "@/assets/heart.svg";
import heart from "@/assets/heart1.svg";

function Card({ product }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div key={product.id} className={styles.product}>
      <Image
        src={product.image}
        alt="image"
        className={styles.image}
        width={200}
        height={300}
      />

      <div className={styles.details}>
        <div>
          <p>{product.title}</p>
          <p>{product.category}</p>
        </div>
        <Image
          src={clicked ? heartFull : heart}
          alt="heart"
          width={24}
          height={24}
          onClick={() => setClicked(!clicked)}
        />
      </div>
    </div>
  );
}

export { Card };
