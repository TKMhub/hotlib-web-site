import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "/public/page_styles/Home.module.scss";
import Layout from "./components/home/Layout";

import TextEffect from "./components/home/TextEffect";

export default function Home() {
  return (
    <>
      <Layout title="home">
        {/* 1ページ目************************************************************/}
        <section className={styles.contentsWrapper} id="fstpg">
          <TextEffect
            title="Web Design System"
            className={styles.titleCnter}
            id="fstpg"
          />
          <p className={styles.fromhotLib}>from hotLib</p>
          {/* ↓スクロール指示 */}
          <a className={styles.Scroll} href="#sndpg">
            Scroll
          </a>
        </section>

        {/* 2ページ目************************************************************/}
        <section className={styles.contentsWrapper} id="sndpg">
          <TextEffect
            title="Web Design"
            className={styles.titleDesign}
            id="sndpg"
          />
          {/* コンテンツ */}
          <a className={styles.Scroll} href="#thdpg">
            Scroll
          </a>
        </section>

        {/* 3ページ目************************************************************/}
        <section className={styles.contentsWrapper} id="thdpg">
          <TextEffect
            title="Web System"
            className={styles.titleCnter}
            id="thdpg"
          />
          {/* コンテンツ */}
          <a className={styles.Scroll} href="#fthpg">
            Scroll
          </a>
        </section>

        {/* 4ページ目************************************************************/}
        <section className={styles.contentsWrapper} id="fthpg">
          <TextEffect title="Works" className={styles.titleCnter} id="fthpg" />
          {/* コンテンツ */}
          <a className={styles.Scroll} href="#lastpg">
            Scroll
          </a>
        </section>

        {/* 最終ページ************************************************************/}
        <section className={styles.contentsWrapper} id="lastpg">
          <TextEffect title="About" className={styles.titleCnter} id="lastpg" />
          {/* コンテンツ */}
          <a className={styles.Scroll} href="#fstpg">
            Scroll
          </a>
        </section>
      </Layout>
    </>
  );
}
