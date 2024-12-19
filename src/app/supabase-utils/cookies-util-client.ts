import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { Database } from "../../../supabase/supabase";

// Initialize the client that runs on the server
// Intended for use in Server Components, Route Handlers or Actions
export const getSupabaseCookiesUtilClient = async () => {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            console.error("Failed to set cookies", error);
          }
        },
      },
    }
  );
};
