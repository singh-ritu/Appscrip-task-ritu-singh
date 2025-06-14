import Image from "next/image";
import React from "react";
import styles from "./drawer.module.css";
import arrow from "@/assets/arrow.svg";

function Drawer({ options, isDrawerOpen }) {
  return (
    <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}>
      <div className={styles.optionsList}>
        {options?.map((option, index) => (
          <div key={index} className={styles.objectOptions}>
            {option.filterName}
            <div className={styles.filterdetails}>
              <p className={styles.all}>All</p>
              <Image src={arrow} alt="droparrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Drawer };
