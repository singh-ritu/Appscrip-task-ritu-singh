import React from "react";
import subscribe from "@/assets/Subscribe.svg";
import styles from "./footer.module.css";
import Image from "next/image";
import language from "@/assets/Language.svg";

function Footer() {
  return (
    <div className={styles.parentFooter}>
      <div className={styles.topsection}>
        <div className={styles.topright}>
          <p className={styles.toprightheading}>BE THE FIRST TO KNOW</p>
          <p className={styles.toprightsubheading}>
            Sign up for updates from mettā muse.
          </p>
          <Image
            src={subscribe}
            alt="subscribe"
            width={584}
            height={48}
            className={styles.Image}
          />
        </div>
        <div className={styles.topleft}>
          <p className={styles.topleftheading}>CONTACT US</p>
          <p className={styles.phonenumber}>+44 221 133 5360</p>
          <p className={styles.mail}>customercare@mettamuse.com</p>
          <p className={styles.currency}>Currency</p>
          <Image src={language} alt="language" width={72} height={24} />
          <p className={styles.transactions}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export { Footer };
