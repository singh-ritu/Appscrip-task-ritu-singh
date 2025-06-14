"use client";

import logo from "@/assets/Logo.svg";
import logoText from "@/assets/logoText.svg";
import icons from "@/assets/Icons.svg";
import mobileIcons from "@/assets/mobile-icons.svg";
import Image from "next/image";
import styles from "./header.module.css";
import useDevice from "@/app/hooks/useDevice";

function Header() {
  const isMobile = useDevice();

  return (
    <div className={styles.header}>
      <Image src={logo} alt="logo" width={36} height={36} />
      <Image
        src={logoText}
        alt="logoText"
        width={107}
        height={44}
        className={styles.centerImage}
      />
      <Image
        className={styles.icons}
        src={isMobile ? mobileIcons : icons}
        alt="icons"
        width={244}
        height={24}
      />
    </div>
  );
}

export { Header };
