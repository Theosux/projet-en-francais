import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/navBar.module.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PlaceholderPageTitle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navBarContainer}>
        <div className={styles.navLeft}>
          <Link className={styles.linkHome} href="/">
            PlaceHolderHome
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link className={styles.linkOther} href="/other">
            PlaceholderNavBTN
          </Link>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );
}
