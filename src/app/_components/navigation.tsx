"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "../supabase-utils/browser-client";
import { urlPath } from "../utils/url-helpers";

export function Navigation({ tenant }: { tenant: string }) {
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
        router.push(`/${tenant}`);
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
            href={urlPath("/tickets", tenant)}
            {...(pathname === urlPath("/tickets", tenant) ? activeProps : inactiveProps)}
          >
            Ticket List
          </Link>
        </li>
        <li>
          <Link
            role="button"
            href={urlPath("/tickets/new", tenant)}
            {...(pathname === urlPath("/tickets/new", tenant) ? activeProps : inactiveProps)}
          >
            Create new Ticket
          </Link>
        </li>
        <li>
          <Link
            role="button"
            href={urlPath("/tickets/users", tenant)}
            {...(pathname === urlPath("/tickets/users", tenant) ? activeProps : inactiveProps)}
          >
            User List
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link
            role="button"
            href={urlPath("/logout", tenant)}
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
