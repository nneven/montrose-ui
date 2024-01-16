"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const isCurrentPage = (href: string) => href === pathname;

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          {
            "text-muted-foreground": !isCurrentPage("/"),
          }
        )}
      >
        Home
      </Link>
      <Link
        href="/portfolio"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          {
            "text-muted-foreground": !isCurrentPage("/portfolio"),
          }
        )}
      >
        Portfolio
      </Link>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          {
            "text-muted-foreground": !isCurrentPage("/research"),
          }
        )}
      >
        Research
      </Link>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          {
            "text-muted-foreground": !isCurrentPage("/settings"),
          }
        )}
      >
        Settings
      </Link>
    </nav>
  );
}
