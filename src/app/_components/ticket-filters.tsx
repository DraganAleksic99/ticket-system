"use client";

import { useRef, FormEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function TicketFilters() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const search = searchInputRef.current!.value;

    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set("search", search);
    updatedParams.set("page", "1");
    
    router.push(pathname + "?" + updatedParams.toString());
  };

  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          alignContent: "center",
          display: "flex",
          gap: "15px",
        }}
      >
        <input
          type="search"
          ref={searchInputRef}
          id="search"
          name="search"
          placeholder="Search tickets..."
          required
          style={{ margin: 0, maxWidth: "350px" }}
        />
        <button type="submit" role="button" style={{ width: "auto" }}>
          Search
        </button>
      </div>
    </form>
  );
}
