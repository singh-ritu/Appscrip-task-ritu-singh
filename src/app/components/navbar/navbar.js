import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <span>SHOP</span>
      <span>SKILLS</span>
      <span>STORIES</span>
      <span>ABOUT</span>
      <span>CONTACT US</span>
    </div>
  );
}

export { Navbar };
