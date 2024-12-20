import { createBrowserClient } from "@supabase/ssr";
import { Database } from "../../../supabase/supabase";

// Initialize the client that runs in the browser
export const getSupabaseBrowserClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );
