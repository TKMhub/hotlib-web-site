import React from "react";
import styles from "/public/page_styles/Vision.module.scss";
import Layout from "./components/home/Layout";
import TextEffect from "./components/home/TextEffect";

function CommingSoon() {
  return (
    <>
        <div className={styles.centerImage}>
          <div className={styles.contentsBox}>
            <div className={styles.pulseWrapper}>
              <div className={styles.pulseDot1}></div>
              <div className={styles.pulseDot2}></div>
              <div className={styles.pulseDot3}></div>
            </div>
          </div>
          {/* hrefで飛びたい所はidを指定
          <a className={styles.myLink} href="#section1">
          Scroll
        </a> */}
          <div className={styles.comming}>
            <TextEffect
              title="Comming soon..."
              className={styles.titleComming}
            />
          </div>
        </div>
    </>
  );
}

export default CommingSoon;
