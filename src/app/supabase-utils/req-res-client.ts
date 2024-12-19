import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { Database } from "../../../supabase/supabase";

// Initialize the client that runs on the server
// Intended for use in middleware
export const getSupabaseReqResClient = ({
  request,
}: {
  request: NextRequest;
}) => {
  const response = {
    value: NextResponse.next({ request }),
  };

  const supabaseClient = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response.value = NextResponse.next({ request });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.value.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  return { supabaseClient, response };
};
