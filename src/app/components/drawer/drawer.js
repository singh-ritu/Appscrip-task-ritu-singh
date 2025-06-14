import Image from "next/image";
import React, { useState } from "react";
import styles from "./drawer.module.css";
import arrow from "@/assets/arrow.svg";

function Drawer({ options }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={styles.drawerContainer}>
      <button onClick={() => setIsShown(!isShown)} className={styles.select}>
        {isShown ? "HIDE FILTER" : "SHOW FILTER"}
        <Image src={arrow} alt="arrow" />
      </button>
      {isShown && (
        <div className={styles.optionsList}>
          {options.map((option, index) => (
            <div key={index} className={styles.objectOptions}>
              {option.filterName}
              <div className={styles.filterdetails}>
                <p className={styles.all}>All</p>
                <Image src={arrow} alt="droparrow" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { Drawer };
