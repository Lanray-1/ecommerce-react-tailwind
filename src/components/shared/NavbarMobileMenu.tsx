"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import type { NavLink } from "./navLinks";

import styles from "./Navbar.module.css";

type NavbarMobileMenuProps = {
  links: NavLink[];
};

export function NavbarMobileMenu({ links }: NavbarMobileMenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className={styles.mobileControls}>
      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X className={styles.menuIcon} aria-hidden="true" />
        ) : (
          <Menu className={styles.menuIcon} aria-hidden="true" />
        )}
      </button>
      {open ? (
        <nav
          id={menuId}
          className={styles.mobileNav}
          aria-label="Primary mobile"
        >
          <ul className={styles.mobileNavList}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
