import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "/public/page_styles/Home.module.scss";
import Layout from "./components/home/Layout";
import CommingSoon from "./CommingSoon";

import TextEffect from "./components/home/TextEffect";

export default function Home() {
  return (
    <>
      <Layout title="home">
        {/* 1ページ目************************************************************/}
        <section className={styles.contentsCenterWrapper} id="fstpg">
          <TextEffect
            title="Web Design System"
            className={styles.titleCenter}
            id="fstpg"
          />
          <p className={styles.fromhotLib}>from hotLib</p>
          {/* ↓スクロール指示 */}
          <a className={styles.Scroll} href="#sndpg">
            Scroll
          </a>
        </section>

        {/* 2ページ目************************************************************/}
        {/* <section className={styles.contentsWrapper} id="sndpg">
          <TextEffect
            title="Web System"
            className={styles.titleDetail}
            id="sndpg"
          />
          <a className={styles.Scroll} href="#thdpg">
            Scroll
          </a>
        </section> */}

        <section className={styles.contentsWrapper} id="sndpg">
          <TextEffect
            title="Web System"
            className={styles.titleDetail}
            id="sndpg"
          />
          <div class="card">
            <div class="content">
              <h2>01</h2> <h3>Glass Card</h3>{" "}
              <p>
                Lorem ipsum dolor sit amet con error nemo doloribus aliquid? 7
              </p>
              <a href="#">More Detail</a> 
            </div>
          </div>
          {/* <a className={styles.Scroll} href="#thdpg">
            Scroll
          </a> */}
        </section>

        {/* 3ページ目************************************************************/}
        {/* <section className={styles.contentsWrapper} id="thdpg">
          <TextEffect
            title="Web Design"
            className={styles.titleDetail}
            id="thdpg"
          />
          <a className={styles.Scroll} href="#fthpg">
            Scroll
          </a>
        </section> */}

        {/* 4ページ目************************************************************/}
        {/* <section className={styles.contentsWrapper} id="fthpg">
          <TextEffect title="Works" className={styles.titleDetail} id="fthpg" />
          <a className={styles.Scroll} href="#lastpg">
            Scroll
          </a>
        </section> */}

        {/* 最終ページ************************************************************/}
        {/* <section className={styles.contentsWrapper} id="lastpg">
          <TextEffect
            title="About"
            className={styles.titleDetail}
            id="lastpg"
            />
          <a className={styles.Scroll} href="#fstpg">
            Scroll
          </a>
        </section>      */}
        {/* 終了************************************************************/}

        {/* 仮→あとで消す */}
        <CommingSoon />
      </Layout>
    </>
  );
}
