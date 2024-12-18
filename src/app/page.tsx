"use client";

import { useEffect } from "react";
import { createSupabaseClient } from "./supabase-utils/client";

export default function Home() {
  useEffect(() => {
    const client = createSupabaseClient();
    client.storage
      .listBuckets()
      .then((result) => console.log("Bucket list", result));
  }, []);

  return <div></div>;
}
