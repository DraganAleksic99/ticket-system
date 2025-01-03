"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/app/supabase-utils/browser-client";
import { urlPath } from "../utils/url-helpers";

export default function NewTicketForm({ tenant }: { tenant: string }) {
  const ticketTitleRef = useRef<HTMLInputElement>(null);
  const ticketDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  useEffect(() => {
    router.prefetch(urlPath(`/tickets/details/[id]`, tenant));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article>
      <h3>Create a new ticket</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const title = ticketTitleRef.current?.value || "";
          const description = ticketDescriptionRef.current?.value || "";

          if (title.trim().length > 4 && description.trim().length > 9) {
            setIsLoading(true);

            supabase
              .from("tickets")
              // @ts-expect-error created_by is required property but its set with db trigger instead in code
              .insert({
                title,
                description,
                tenant,
              })
              .select()
              .single()
              .then(({ error, data }) => {
                if (error) {
                  setIsLoading(false);
                  alert("Could not create ticket");
                  console.error(error);
                } else {
                  router.push(urlPath(`/tickets/details/${data.id}`, tenant));
                }
              });
          } else {
            alert(
              "A title must have at least 5 chars and a description must at least contain 10"
            );
          }
        }}
      >
        <input
          disabled={isLoading}
          ref={ticketTitleRef}
          placeholder="Add a title"
        />
        <textarea
          disabled={isLoading}
          ref={ticketDescriptionRef}
          placeholder="Add a description"
        />
        <button disabled={isLoading} type="submit" aria-busy={isLoading}>
          Create ticket now
        </button>
      </form>
    </article>
  );
}
