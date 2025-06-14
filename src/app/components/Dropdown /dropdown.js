"use client";
import React, { useState } from "react";
import styles from "./dropdown.module.css";
import arrow from "@/assets/arrow.svg";
import check from "@/assets/check.svg";
import Image from "next/image";

function Dropdown({ options, defaultOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultOption);
  const handleSelect = newOption => {
    setSelected(newOption);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.select}>
        {selected}
        <Image src={arrow} alt="arrow" />
      </button>
      {isOpen && (
        <div className={styles.optionsList}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles.option} ${
                option === selected ? styles.selectedOption : ""
              }`}
              onClick={() => handleSelect(option)}>
              {option === selected && <Image src={check} alt="check-icon" />}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { Dropdown };
