import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/assets/Header";
import Sidebar from "@/components/assets/Sidebar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
      <Head>
        <title>Relatalk: Open Source Social Media Platform</title>
        <meta
          name="description"
          content="Open Source Social Media Platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="/Website Cover.png" property="og:image" />
        <meta property="og:image:alt" content="Relatalk Prime" />
        <meta content="white" name="theme-color" />
        <meta
          content="Relatalk: Open Source Social Media Platform"
          property="og:title"
        />
        <meta
          property="og:description"
          content="Open Source Social Media Platform"
        />
        <meta content="/Website Cover.png" name="twitter:image" />
        <link
          rel="/app/apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/app/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/app/favicon-16x16.png"
        />
        <link rel="manifest" href="/app/site.webmanifest" />
        <link rel="icon" href="/app/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header
          styles={styles}
          isSidebar={isSidebar}
          setIsSidebar={setIsSidebar}
        />
        <div className={styles.center}>
          <div className={styles.text}>
            <h1 className={styles.hero_title}>
              Connect. Collaborate. <span>Share.</span>
            </h1>
            <h2 className={styles.hero_description}>
              <span>
                Relatalk is an open source Social-Media Platform. <br /> that is
                built on top of the MENN Stack plus Appwrite.
              </span>
            </h2>
          </div>
          <div className={styles.hero_cta}>
            <Link href="https://app-relatalk.vercel.app" className={styles.cta_button}>
              Try Now
            </Link>
            <Link
              href="https://discord.com/invite/ucUx7eP5tc"
              className={styles.cta_button}
            >
              Join community
            </Link>
          </div>
        </div>
        <Sidebar styles={styles} isSidebar={isSidebar} />
      </main>
    </>
  );
}
