import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import { IconBadge } from "@/components/ui/IconBadge";

import { NavbarMobileMenu } from "./NavbarMobileMenu";
import { PRIMARY_NAV_LINKS } from "./navLinks";

import styles from "./Navbar.module.css";

/** Placeholder until cart state arrives in Milestone 6 (ADR-F002). */
const PLACEHOLDER_CART_COUNT = 0;

export function Navbar() {
  const cartSlot = (
    <Link href="/cart" className={styles.cartLink} aria-label="View cart">
      <IconBadge
        icon={ShoppingCart}
        count={PLACEHOLDER_CART_COUNT}
        label="Shopping cart"
      />
    </Link>
  );

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="LauxxyLauxry home">
          LauxxyLauxry
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {PRIMARY_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          {cartSlot}
          <NavbarMobileMenu links={PRIMARY_NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
