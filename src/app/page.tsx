"use client";

import { useEffect } from "react";
import { getSupabaseBrowserClient } from "./supabase-utils/browser-client";

export default function Home() {
  useEffect(() => {
    const client = getSupabaseBrowserClient();
    client.storage
      .listBuckets()
      .then((result) => console.log("Bucket list", result));
  }, []);

  return <div></div>;
}
