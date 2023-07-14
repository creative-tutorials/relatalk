import pri from "@/styles/Pricing.module.css";
import styles from "@/styles/Home.module.css";
import Header from "@/components/assets/Header";
import Sidebar from "@/components/assets/Sidebar";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export default function Pricing() {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
      <Head>
        <title>Pricing - Relatalk</title>
        <meta
          name="description"
          content="Open Source Alternative Social Media Platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="/Website Cover.png" property="og:image" />
        <meta property="og:image:alt" content="Relatalk Prime" />
        <meta content="white" name="theme-color" />
        <meta content=">Pricing - Relatalk" property="og:title" />
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
      <main className={pri.secondary_page}>
        <Header
          styles={styles}
          isSidebar={isSidebar}
          setIsSidebar={setIsSidebar}
        />
        <div className={pri.container}>
          <div className={pri.center}>
            <h1 className={pri.secondary_description}>
              <span>
                Choose the plan that&apos;s <br />{" "}
                <span className={pri.highlight}>right for you</span>{" "}
              </span>
            </h1>
            <div className={pri.pricingWrapper}>
              <div className={pri.priceCards}>
                <div className={pri.card_center}>
                  <p>Starter</p>
                  <div className={pri.price}>
                    <h2>$0</h2>
                    <span>/user/month</span>
                  </div>
                  <div className={pri.features}>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      20 API requests per month
                    </li>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Up to 20MB file uploads
                    </li>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      5 logs reports
                    </li>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Up to 100 Realtime messages
                    </li>
                  </div>
                  <div className={pri.priceButton}>
                    <Link id={pri.paylink} href="https://tally.so/r/wAKNql" target="_blank">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className={pri.priceCards}>
                <div className={pri.card_center}>
                  <p>Teams</p>
                  <div className={pri.price}>
                    <h2>$25</h2>
                    <span>/user/month</span>
                  </div>
                  <div className={pri.features}>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      500 API requests per month
                    </li>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      500GB file uploads
                    </li>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      100 logs reports
                    </li>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Up to 500 Realtime messages
                    </li>
                  </div>
                  <div className={pri.priceButton}>
                    <Link
                      id={pri.paylink}
                      href="https://relatalk.lemonsqueezy.com/checkout?cart=7c62ae3d-2ec2-4771-8ceb-5153a12efb4f"
                      target="_blank"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className={pri.priceCards}>
                <div className={pri.card_center}>
                  <p>Business</p>
                  <div className={pri.price}>
                    <h2>$155</h2>
                    <span>/user/month</span>
                  </div>
                  <div className={pri.features}>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Unlimited API requests per month
                    </li>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Unlimited file uploads
                    </li>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Unlimited logs reports
                    </li>
                    <li>
                      <svg
                        width="12"
                        height="12"
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m21.646 4.985-12.705 15-1.185-.054-5.025-7.155 1.227-.861 4.467 6.36 12.077-14.26 1.146.97h-.002Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Unlimited Realtime messages
                    </li>
                  </div>
                  <div className={pri.priceButton}>
                    <Link id={pri.paylink} href="https://tally.so/r/w2B06p" target="_blank">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar styles={styles} isSidebar={isSidebar} />
      </main>
    </>
  );
}
