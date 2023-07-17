import Link from "next/link";
interface SidebarProps {
  styles: {
    readonly [key: string]: string;
  };
  isSidebar: boolean;
}
export default function Sidebar({ styles, isSidebar }: SidebarProps) {
  return (
    <div className={styles.sidebar} id={isSidebar ? "" : styles.hidden}>
      <div className={styles.ads}>
        <div className={styles.ads_crunch}>
          <span>Ads</span>
        </div>
        <Link href="https://www.patreon.com/DevKid">
          <svg
            width="30"
            height="30"
            fill="#efefef"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.508 16.328a6.496 6.496 0 1 0 0-12.992 6.496 6.496 0 0 0 0 12.992Z"></path>
            <path d="M2.996 3.336H6.17v17.33H2.996V3.336Z"></path>
          </svg>
          <h4 className={styles.ads_text}>Support us Pateron</h4>
        </Link>
      </div>
      <div className={styles.adsLinks}>
        <Link href="/">Home</Link>
        <Link href="/pricing">API Pricing</Link>
        <Link href="/features">Features</Link>
      </div>
    </div>
  );
}
