import { Login } from "../_components/login";
import { SearchParams } from "next/dist/server/request/search-params";
import { FormType } from "../_components/login";
import { Params } from "next/dist/server/request/params";
import { notFound } from "next/navigation";
import { getSupabaseAdminClient } from "../supabase-utils/admin-client";

export default async function Home({
  searchParams,
  params,
}: {
  searchParams: SearchParams;
  params: Params;
}) {
  const { magicLink, passwordRecovery } = await searchParams;
  const wantsMagicLink = magicLink === "yes";
  const wantsPasswordRecovery = passwordRecovery === "yes";

  const { tenant } = await params;
  const supabaseAdmin = getSupabaseAdminClient();

  const { data, error } = await supabaseAdmin
    .from("tenants")
    .select("*")
    .eq("id", tenant)
    .single();

  if (error) {
    notFound();
  }

  const { name: tenantName } = data;

  let formType = "pw-login";

  if (wantsMagicLink) {
    formType = "magic-link";
  } else if (wantsPasswordRecovery) {
    formType = "recovery";
  }

  return (
    <Login
      formType={formType as FormType}
      tenant={tenant as string}
      tenantName={tenantName}
    />
  );
}
