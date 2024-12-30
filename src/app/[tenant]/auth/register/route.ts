import { Params } from "next/dist/server/request/params";
import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/app/supabase-utils/admin-client";
import { buildUrl } from "@/app/utils/url-helpers";
import { sendOTPLink } from "@/app/utils/send-otp-link";

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const supabaseAdmin = getSupabaseAdminClient();
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const safeEmailString = encodeURIComponent(email);
  const password = formData.get("password") as string;

  const { tenant } = await params;
  const isNonEmptyString = (value: unknown) =>
    typeof value === "string" && value.trim().length > 0;
  const emailRegex = /^\S+@\S+$/;
  const [, emailHost] = email.split("@");

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(password) ||
    !emailRegex.test(email)
  ) {
    return NextResponse.redirect(
      buildUrl("/error", tenant as string, request),
      302
    );
  }

  console.log(
    "Tenant: " +
      tenant +
      "\n" +
      "Email Host: " +
      emailHost.slice(0, emailHost.lastIndexOf("."))
  );

  if (tenant !== emailHost.slice(0, emailHost.lastIndexOf("."))) {
    return NextResponse.redirect(
      buildUrl(
        `/error?type=register_mail_mismatch&email=${safeEmailString}`,
        tenant as string,
        request
      ),
      302
    );
  }

  const { data: userData, error: userError } =
    await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      app_metadata: {
        tenants: [tenant],
      },
    });

  if (userError) {
    const userExists = userError.message.includes("already been registered");

    if (userExists) {
      return NextResponse.redirect(
        buildUrl(
          `/error?type=register_mail_exists&email=${safeEmailString}`,
          tenant,
          request
        ),
        302
      );
    } else {
      return NextResponse.redirect(
        buildUrl("/error?type=register_unknown", tenant, request),
        302
      );
    }
  }

  const { data: serviceUser } = await supabaseAdmin
    .from("service-users")
    .insert({
      full_name: name,
      supabase_user: userData.user.id,
    })
    .select()
    .single();

  const { error: tpError } = await supabaseAdmin
    .from("tenant-permissions")
    .insert({
      tenant,
      service_user: serviceUser?.id,
    });

  if (tpError) {
    await supabaseAdmin.auth.admin.deleteUser(userData.user.id);
    return NextResponse.redirect(buildUrl("/error", tenant, request), 302);
  }

  await sendOTPLink(email, "signup", tenant, request);

  return NextResponse.redirect(
    buildUrl(`/registration-success?email=${safeEmailString}`, tenant, request),
    302
  );
}
