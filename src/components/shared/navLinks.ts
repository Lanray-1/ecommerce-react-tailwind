export type NavLink = {
  href: string;
  label: string;
};

/** Primary navigation — routes wired in later milestones where pages do not exist yet. */
export const PRIMARY_NAV_LINKS: NavLink[] = [
  { href: "/", label: "Shop" },
  { href: "/login", label: "Log in" },
  { href: "/signup", label: "Sign up" },
];
