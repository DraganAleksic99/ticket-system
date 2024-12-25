import Link from "next/link";
import { SearchParams } from "next/dist/server/request/search-params";
import { Params } from "next/dist/server/request/params";
import { urlPath } from "@/app/utils/url-helpers";

export default async function ErrorPage({
  searchParams,
  params
}: {
  searchParams: SearchParams;
  params: Params
}) {
  const { type } = await searchParams;
  const { tenant } = await params
  const knownErrors = ["login-failed", "magiclink", "invalid_magiclink"];

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
      {!knownErrors.includes(type as string) && (
        <strong>
          Something went wrong. Please try again or contact support.
        </strong>
      )}
      <br />
      <br />
      <Link role="button" href={urlPath("/", tenant as string)}>
        Go back.
      </Link>
    </div>
  );
}
