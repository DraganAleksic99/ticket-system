"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "../supabase-utils/browser-client";

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();

  const activeProps = { className: "contrast" };
  const inactiveProps = { className: "secondary outline" };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        router.push("/");
      }
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link
            role="button"
            href="/tickets"
            {...(pathname === "/tickets" ? activeProps : inactiveProps)}
          >
            Ticket List
          </Link>
        </li>
        <li>
          <Link
            role="button"
            href="/tickets/new"
            {...(pathname === "/tickets/new" ? activeProps : inactiveProps)}
          >
            Create new Ticket
          </Link>
        </li>
        <li>
          <Link
            role="button"
            href="/tickets/users"
            {...(pathname === "/tickets/users" ? activeProps : inactiveProps)}
          >
            User List
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            role="button"
            href="/logout"
            className="secondary"
            prefetch={false}
            onClick={(e) => {
              e.preventDefault();
              supabase.auth.signOut();
            }}
          >
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
