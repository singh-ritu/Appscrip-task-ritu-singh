import Image from "next/image";
import React, { useState } from "react";
import styles from "./drawer.module.css";
import arrow from "@/assets/arrow.svg";

function Drawer({ options, isDrawerOpen }) {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = index => {
    setOpenAccordions(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
    console.log("clicked");
  };
  return (
    <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}>
      <div className={styles.optionsList}>
        {options?.map((option, index) => (
          <div
            key={index}
            className={styles.objectOptions}
            onClick={() => toggleAccordion(index)}>
            {option.filterName}
            <div className={styles.filterdetails}>
              <p className={styles.all}>All</p>
              <Image
                src={arrow}
                alt="droparrow"
                className={` ${openAccordions[index] ? styles.rotate : ""}`}
              />
            </div>
            {openAccordions[index] && (
              <div className={styles.accordionContent}>
                {option.filterItems.map((item, i) => (
                  <p key={i} className={styles.filterItem}>
                    <input
                      type="checkbox"
                      style={{
                        accentColor: "white",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Drawer };
