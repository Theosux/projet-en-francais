import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import { useState, useEffect } from "react";
import styles from "../styles/navBar.module.css";
import stylesMobile from "../styles/navBar.mobile.module.css";
import React from "react";
import Modal from "../components/modal/modal";
import menuSvg from "./imagesFrontPage/svgs/menu.svg";

export default function App({ Component, pageProps }) {

  const[mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [navBarToggle, changeNavBarToggle] = useState(false);

  const ChangeNavState = () => {
    switch (navBarToggle) {
      case true:
        return (
          <>
            <div className={stylesMobile.navHamburgerSideOpen}>
              <Link
                className={stylesMobile.linkHamburger}
                onClick={() => changeNavBarToggle(!navBarToggle)}
                href="/sports"
              >
                Sports
              </Link>
              <hr className={stylesMobile.dividerBar}></hr>
              <Link
                className={stylesMobile.linkHamburger}
                onClick={() => changeNavBarToggle(!navBarToggle)}
                href="/mode"
              >
                Mode
              </Link>
              <hr className={stylesMobile.dividerBar}></hr>
              <Link
                className={stylesMobile.linkHamburger}
                onClick={() => changeNavBarToggle(!navBarToggle)}
                href="/technologique"
              >
                Technologique
              </Link>
              <hr className={stylesMobile.dividerBar}></hr>
              <Link
                className={stylesMobile.linkHamburger}
                onClick={() => changeNavBarToggle(!navBarToggle)}
                href="/cuisine"
              >
                Cuisine
              </Link>
              <hr className={stylesMobile.dividerBar}></hr>
              <Link
                className={stylesMobile.linkHamburger}
                onClick={() => changeNavBarToggle(!navBarToggle)}
                href="/culture"
              >
                Culture
              </Link>
              <hr className={stylesMobile.dividerBar}></hr>
              <Link
                className={stylesMobile.linkHamburger}
                onClick={() => changeNavBarToggle(!navBarToggle)}
                href="/libre"
              >
                Temps libre
              </Link>
              <hr className={stylesMobile.dividerBar}></hr>

              <div className={stylesMobile.smallEmpty}></div>
              <Modal />
            </div>
            <div
              className={stylesMobile.background}
              onClick={() => changeNavBarToggle(!navBarToggle)}
            ></div>
          </>
        );
      case false:
        return (
          <div className={stylesMobile.navHamburgerSide}>
            <Link
              className={stylesMobile.linkHamburger}
              onClick={() => changeNavBarToggle(!navBarToggle)}
              href="/sports"
            >
              Sports
            </Link>
            <hr className={stylesMobile.dividerBar}></hr>
            <Link
              className={stylesMobile.linkHamburger}
              onClick={() => changeNavBarToggle(!navBarToggle)}
              href="/mode"
            >
              Mode
            </Link>
            <hr className={stylesMobile.dividerBar}></hr>
            <Link
              className={stylesMobile.linkHamburger}
              onClick={() => changeNavBarToggle(!navBarToggle)}
              href="/technologique"
            >
              Technologique
            </Link>
            <hr className={stylesMobile.dividerBar}></hr>
            <Link
              className={stylesMobile.linkHamburger}
              onClick={() => changeNavBarToggle(!navBarToggle)}
              href="/cuisine"
            >
              Cuisine
            </Link>
            <hr className={stylesMobile.dividerBar}></hr>
            <Link
              className={stylesMobile.linkHamburger}
              onClick={() => changeNavBarToggle(!navBarToggle)}
              href="/culture"
            >
              Culture
            </Link>
            <hr className={stylesMobile.dividerBar}></hr>
            <Link
              className={stylesMobile.linkHamburger}
              onClick={() => changeNavBarToggle(!navBarToggle)}
              href="/libre"
            >
              Temps libre
            </Link>
            <hr className={stylesMobile.dividerBar}></hr>

            <div className={stylesMobile.smallEmpty}></div>
            <Modal />
          </div>
        );
    }
  };

  const ComponentChange = () => {
    const matches = useMediaQuery("(min-width: 1025px)");
    return matches
      ? mounted && (
          <div>
            <Head>
              <title>Le mot écrit</title>
              <meta name="description" content="Generated by create next app" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
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
                <Link className={styles.linkOther} href="/libre">
                  Temps libre
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
          </div>
        )
      : mounted && (
          <>
            <Head>
              <title>Le mot écrit</title>
              <meta name="description" content="Generated by create next app" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={stylesMobile.navBarContainer}>
              <Image
                className={stylesMobile.navHamburgerButton}
                src={menuSvg}
                alt="Menu"
                onClick={() => changeNavBarToggle(!navBarToggle)}
              />
              <div className={stylesMobile.navTitle}>
                <Link
                  className={stylesMobile.linkHome}
                  onClick={() =>
                    changeNavBarToggle(navBarToggle ? !navBarToggle : nil)
                  }
                  href="/"
                >
                  Le mot écrit
                </Link>
              </div>
            </div>

            <ChangeNavState />

            <div className={stylesMobile.empty}></div>

            <Component {...pageProps} />

            <div className={stylesMobile.footerContainer}>
              <Link className={stylesMobile.linkOther} href="/abonment">
                Abonnement
              </Link>
              <Link className={stylesMobile.linkOther} href="/informations">
                Informations
              </Link>
              <Link className={stylesMobile.linkOther} href="/editeurs">
                Éditeurs
              </Link>
            </div>
          </>
        );
  };

  return ComponentChange();
}
