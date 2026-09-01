import styles from "./AnnouncementBar.module.css";

export function AnnouncementBar() {
  return (
    <aside className={styles.bar} aria-label="Store announcement">
      <p className={styles.message}>
        Free shipping on orders over $100 — complimentary luxury packaging on
        every order.
      </p>
    </aside>
  );
}
