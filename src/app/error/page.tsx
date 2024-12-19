import Link from "next/link";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function ErrorPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { type } = await searchParams;
  const knownErrors = ["login-failed"];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ooops!</h1>
      {type === "login-failed" && (
        <strong>Login was not successfull, sorry.</strong>
      )}
      {!knownErrors.includes(type as string) && (
        <strong>
          Something went wrong. Please try again or contact support.
        </strong>
      )}
      <br />
      <br />
      <Link role="button" href="/">
        Go back.
      </Link>
    </div>
  );
}
