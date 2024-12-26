import { getSupabaseCookiesUtilClient } from "../supabase-utils/cookies-util-client";

export async function TenantName({ tenant }: { tenant: string }) {
  let tenantName = "Unknown";
  const supabase = await getSupabaseCookiesUtilClient();

  const { data, error } = await supabase
    .from("tenants")
    .select("name")
    .eq("id", tenant)
    .single();

  tenantName = data?.name ?? tenantName;

  console.log({
    tenant,
    data,
    error,
  });

  return (
    <header style={{ marginBottom: "10px" }}>
      <div
        style={{
          borderLeft: "4px solid orange",
          display: "block",
          padding: "4px 10px",
          fontSize: "1.1em",
        }}
      >
        Ticket System
        <strong style={{ marginLeft: "1ex" }}>{tenantName}</strong>
      </div>
    </header>
  );
}
