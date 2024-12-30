import Link from "next/link";
import { SearchParams } from "next/dist/server/request/search-params";
import { Params } from "next/dist/server/request/params";
import { urlPath } from "@/app/utils/url-helpers";

export default async function ErrorPage({
  searchParams,
  params,
}: {
  searchParams: SearchParams;
  params: Params;
}) {
  const { type, email } = await searchParams;
  const { tenant } = await params;
  const knownErrors = [
    "login-failed",
    "magiclink",
    "invalid_magiclink",
    "register_mail_mismatch",
    "register_mail_exists",
    "register_unknown",
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ooops!</h1>
      {type === "login-failed" && (
        <strong>Login was not successfull, sorry.</strong>
      )}
      {type === "magiclink" && (
        <strong>
          Could not send a magic link. Maybe you had a typo in your E-Mail?
        </strong>
      )}
      {type === "invalid_magiclink" && (
        <strong>
          The magic link was invalid. Maybe it expired? Please request a new
          one.
        </strong>
      )}
      {type === "register_mail_mismatch" && (
        <strong>
          You are not legitimated to register an account with <u>{email}.</u>
        </strong>
      )}
      {type === "register_mail_exists" && (
        <strong>
          There is already an account registered with &nbsp;
          <u>{searchParams.email}</u>.
        </strong>
      )}
      {type === "register_unknown" && (
        <strong>
          Sorry but an unknown error occurred when trying to create an account.
        </strong>
      )}
      {!knownErrors.includes(type as string) && (
        <strong>
          Something went wrong. Please try again or contact support.
        </strong>
      )}
      <br />
      <br />
      <Link
        role="button"
        href={urlPath(`/${email && "register"}`, tenant as string)}
      >
        Go back.
      </Link>
    </div>
  );
}
