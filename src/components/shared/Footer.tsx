import Link from "next/link";

import styles from "./Footer.module.css";

const CUSTOMER_CARE_LINKS = [
  { href: "#", label: "Contact Us" },
  { href: "#", label: "Shipping & Returns" },
  { href: "#", label: "FAQ" },
] as const;

const COMPANY_LINKS = [
  { href: "#", label: "About" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <section className={styles.column} aria-labelledby="footer-care">
            <h2 id="footer-care" className={styles.columnTitle}>
              Customer Care
            </h2>
            <ul className={styles.linkList}>
              {CUSTOMER_CARE_LINKS.map((link) => (
                <li key={link.label}>
                  {/* TODO: Replace placeholder hrefs when marketing/support pages exist. */}
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.column} aria-labelledby="footer-company">
            <h2 id="footer-company" className={styles.columnTitle}>
              Company
            </h2>
            <ul className={styles.linkList}>
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className={styles.copyright}>
          &copy; {year} LauxxyLauxry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
