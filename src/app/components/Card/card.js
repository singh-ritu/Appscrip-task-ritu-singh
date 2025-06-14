import Image from "next/image";
import styles from "./card.module.css";
import React, { useState } from "react";
import heartFull from "@/assets/heart.svg";
import heart from "@/assets/heart1.svg";

function Card({ product }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div key={product.id} className={styles.product}>
      <div>
        <Image
          src={product.image}
          alt="image"
          className={styles.image}
          width={300}
          height={400}
        />
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{product.title}</p>
        <div className={styles.subdetails}>
          <p className={styles.category}>{product.category}</p>

          <div>
            <Image
              src={clicked ? heartFull : heart}
              alt="heart"
              width={24}
              height={24}
              onClick={() => setClicked(!clicked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
