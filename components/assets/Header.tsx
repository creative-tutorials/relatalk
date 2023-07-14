import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
interface HeaderProps {
  styles: {
    readonly [key: string]: string;
  };
  isSidebar: boolean;
  setIsSidebar: Dispatch<SetStateAction<boolean>>
}
export default function Header({ styles, isSidebar, setIsSidebar }: HeaderProps) {
  return (
    <header className={styles.header_prime}>
      <div className={styles.header_component}>
        <div className={styles.header_logo}>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={150}
              height={40}
              alt="Relatalk prime"
            />
          </Link>
        </div>
        <div className={styles.header_links}>
          <Link href="/pricing">API pricing</Link>
          <Link href="/features">Features</Link>
        </div>
        <div className={styles.header_cta}>
          <Link href="https://discord.com/invite/ucUx7eP5tc">
            Join community
          </Link>
        </div>
        <div className={styles.mobile_menu}>
          {isSidebar ? (
            <svg
              width="25"
              height="25"
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsSidebar(false)}
            >
              <path d="M4 11h12v2H4v-2Zm0-5h16v2H4V6Zm0 12h7.235v-2H4v2Z"></path>
            </svg>
          ) : (
            <svg
              width="25"
              height="25"
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsSidebar(true)}
            >
              <path d="M4 6h16v2H4V6Zm4 5h12v2H8v-2Zm5 5h7v2h-7v-2Z"></path>
            </svg>
          )}
        </div>
      </div>
    </header>
  );
}
