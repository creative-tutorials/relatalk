import Head from "next/head";
import Link from "next/link";
import error from "@/styles/404.module.css";
import styles from "@/styles/Home.module.css";
import Header from "@/components/assets/Header";
import Sidebar from "@/components/assets/Sidebar";
import { useState } from "react";

export default function Custom404() {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
      <Head>
        <title>Relatalk: Open Source Alternative Social Media Platform</title>
        <meta
          name="description"
          content="Open Source Alternative Social Media Platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          content="Open Source Alternative Social Media Platform"
          name="description"
        />
        <meta content="/Website Cover.png" property="og:image" />
        <meta property="og:image:alt" content="Relatalk Prime" />
        <meta
          content="Relatalk: Open Source Alternative Social Media Platform"
          property="og:title"
        />
        <meta
          property="og:description"
          content="The Open Source Alternative to Firebase."
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
      <main className={error.error404}>
        <Header
          styles={styles}
          isSidebar={isSidebar}
          setIsSidebar={setIsSidebar}
        />
        <div className={error.center}>
          <h1 className={error.error_title}>404</h1>
          <h3 className={error.error_description}>
            The page you are looking for doesn&apos;t exist or has been moved
          </h3>
          <Link href="/">Back to home</Link>
        </div>
        <Sidebar styles={styles} isSidebar={isSidebar} />
      </main>
    </>
  );
}
