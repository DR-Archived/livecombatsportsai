"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();

  // Hide navbar on legal demand page (the popup covers everything)
  if (pathname === "/legal/final-demand") {
    return null;
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-bg-primary/82 shadow-card backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/legal/final-demand" className="flex items-center gap-2" aria-label="Legal Demand">
          <Logo size="md" variant="full" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/legal/final-demand"
            className="rounded-md px-3.5 py-2 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
          >
            Final Demand
          </Link>
        </div>
      </nav>
    </header>
  );
}
