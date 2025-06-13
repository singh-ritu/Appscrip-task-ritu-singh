import React from "react";
import subscribe from "@/assets/Subscribe.svg";
import styles from "./footer.module.css";
import Image from "next/image";
import language from "@/assets/Language.svg";
import frame from "@/assets/Frame.svg";
import frame2 from "@/assets/Frame2.svg";

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
      <div className={styles.bottomsection}>
        <div className={styles.bottomright}>
          <div className={styles.rightfirst}>
            <p className={styles.rightfirstheading}>mettā muse</p>
            <p className={styles.rightfirstlinks}>About</p>
            <p className={styles.rightfirstlinks}>Stories</p>
            <p className={styles.rightfirstlinks}>Artisans</p>
            <p className={styles.rightfirstlinks}>Boutiques</p>
            <p className={styles.rightfirstlinks}>Contact Us</p>
            <p className={styles.rightfirstlinks}>EU Complainces DU</p>
          </div>
          <div>
            <p className={styles.rightsecondheading}>QUICK LINKS</p>
            <p className={styles.rightsecondlinks}>Order & shipping</p>
            <p className={styles.rightsecondlinks}>Join/login as a seller</p>
            <p className={styles.rightsecondlinks}>Payments & Pricing</p>
            <p className={styles.rightsecondlinks}>Returns & Refunds</p>
            <p className={styles.rightsecondlinks}>FAQs</p>
            <p className={styles.rightsecondlinks}>Privacy Policy</p>
            <p className={styles.rightsecondlinks}>Terms & Conditions</p>
          </div>
        </div>
        <div className={styles.bottomleft}>
          <p className={styles.bottomleftheading}> FOLLOW US</p>
          <Image src={frame} alt="frame" width={76} height={32} />
          <p className={styles.bottomleftlast}>mettā muse Accepts</p>
          <Image src={frame2} alt="frame2" width={376} height={35} />
        </div>
      </div>
      <p className={styles.bottomtag}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
}

export { Footer };
