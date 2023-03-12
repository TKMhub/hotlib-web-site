import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "/public/page_styles/Layout.module.scss";
import hotlibWhite from "/public/images/hotLIB_white.svg";

function Layout({ children, title = "Default title" }) {
  return (
    <>
      {/* メタ情報 ------------ */}
      <Head>
        <title>{title}</title>
      </Head>

      {/* ヘッダー ------------ */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href={"/"} passHref className={styles.link}>
            <Image src={hotlibWhite} className={styles.logo} alt={"hotlib"} />
          </Link>
          <ul className={styles.menu}>
            <li>
              <Link href={"/"} passHref>
                HOME
              </Link>
            </li>
            <li>
              <Link href={"/Vision"} passHref>
                VISION
              </Link>
            </li>
            <li>
              <Link href={"/Vision"} passHref>
                WORKS
              </Link>
            </li>
            <li>
              <Link href={"/Vision"} passHref>
                APPROACH
              </Link>
            </li>
            <li>
              <Link href={"/Vision"} passHref>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* メインコンテンツ ------------ */}
      <main>{children}</main>

      {/* フッター ------------ */}
      <footer className={styles.footer}>hotLib 2023</footer>
    </>
  );
}

export default Layout;
