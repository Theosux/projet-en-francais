import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/navBar.module.css";
import React from "react";
import Modal from "../components/modal/modal";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Le mot écrit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navBarContainer}>
        <div className={styles.navLeft}>
          <Link className={styles.linkHome} href="/">
            Le mot écrit
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link className={styles.linkOther} href="/sports">
            Sports
          </Link>
          <Link className={styles.linkOther} href="/mode">
            Mode
          </Link>
          <Link className={styles.linkOther} href="/technologique">
            Technologique
          </Link>
          <Link className={styles.linkOther} href="/cuisine">
            Cuisine
          </Link>
          <Link className={styles.linkOther} href="/culture">
            Culture
          </Link>
          <Link className={styles.linkOther} href="/souri">
            Souri
          </Link>
          <Modal />
        </div>
      </div>

      <Component {...pageProps} />

      <div className={styles.footerContainer}>
        <Link className={styles.linkOther} href="/abonment">
          Abonnement
        </Link>
        <Link className={styles.linkOther} href="/informations">
          Informations
        </Link>
        <Link className={styles.linkOther} href="/editeurs">
          Éditeurs
        </Link>
      </div>
    </>
  );
}
