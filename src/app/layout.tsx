import type { Metadata } from "next";

import { AnnouncementBar } from "@/components/shared/AnnouncementBar";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { ToastProvider } from "@/components/ui/Toast";

import layoutStyles from "./layout.module.css";
import "./globals.css";

// Deliberately no next/font/google here: typography is a design decision
// deferred to later, alongside backend work (see TASKS.md). Using a
// system font stack for now avoids both a premature design choice and an
// external network dependency at build time.

export const metadata: Metadata = {
  title: "E-commerce Frontend",
  description:
    "Frontend for the e-commerce platform (scaffold, not yet designed).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <AnnouncementBar />
          <Navbar />
          <main className={layoutStyles.main}>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
