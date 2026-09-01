import type { LucideIcon } from "lucide-react";

import styles from "./IconBadge.module.css";

export type IconBadgeProps = {
  icon: LucideIcon;
  count?: number;
  /** Accessible label for the icon (required for screen readers). */
  label: string;
  className?: string;
};

export function IconBadge({
  icon: Icon,
  count,
  label,
  className,
}: IconBadgeProps) {
  const showCount = count !== undefined && count > 0;

  return (
    <span
      className={[styles.badge, className].filter(Boolean).join(" ")}
      aria-label={showCount ? `${label}, ${count} items` : label}
    >
      <Icon className={styles.icon} aria-hidden="true" />
      {showCount ? (
        <span className={styles.count} aria-hidden="true">
          {count > 99 ? "99+" : count}
        </span>
      ) : null}
    </span>
  );
}
